import Header from '@/components/header'
import React, { useEffect, useState } from 'react'
import carDetails from './../Shared/carDetails.json'
import InputField from './components/InputField'
import DropdownField from './components/DropdownField'
import { Textarea } from '@/components/ui/textarea'
import { Separator } from '@/components/ui/separator'
import features from './../Shared/features.json'
import { Checkbox } from '@/components/ui/checkbox'
import { Button } from '@/components/ui/button'
import { db } from './../../configs'
import { CarImages, CarListing } from './../../configs/schema'
import TextAreaField from './components/TextAreaField'
import IconField from './components/IconField'
import UploadImages from './components/UploadImages'
import { BiLoaderAlt} from 'react-icons/bi'
import { useNavigate, useNavigation, useSearchParams } from 'react-router-dom'
import { useUser } from '@clerk/clerk-react'
import moment from 'moment'
import { eq } from 'drizzle-orm'
import Service from '@/Shared/Service'

function AddListing() {

	const [formData, setFormData]=useState([]);
	const [featuresData,setFeaturesData]=useState([]);
	const [triggerUploadImages, setTriggerUploadImages]=useState();
	const [searchParams]=useSearchParams();
	const[loader, setLoader]=useState(false);
	const [carInfo, setCarInfo]=useState();
	const navigate=useNavigate();
	const {user}=useUser();

	const mode=searchParams.get('mode');
	const recordId=searchParams.get('id');

	useEffect(()=>{
		if(mode=='edit')
		{
			GetListingDetail();
		}
	},[]);

	const GetListingDetail=async()=> {
		const result=await db.select().from(CarListing)
		.innerJoin(CarImages,eq(CarListing.id,CarImages.carListingId))
		.where(eq(CarListing.id,recordId))

		const resp=Service.FormatResult(result);
		console.log('RESPONSE UNUTAR index.jsx: ', resp[0]);
		setCarInfo(resp[0]);
		setFormData(resp[0]);
		setFeaturesData(resp[0]?.features);
	}

	const handleInputChange=(name, value)=>{
		setFormData((prevData)=>({
			...prevData,
			[name]:value
		}))

		console.log(formData);
	}

	// KORISTIO SI OVO ZA SPREMANJE FEATURES-A
	const handleFeatureChange=(name,value)=>{
		setFeaturesData((prevData)=>({
			...prevData,
			[name]:value
		}))

		console.log(featuresData);
	}

	const onSubmit=async(e)=>{
		setLoader(true);
		e.preventDefault();
		console.log(formData);
		//toast('Molimo Vas pricekajte...');

		if(mode=='edit')
		{
			const result = await db.update(CarListing).set({
				...formData,
				features:featuresData,
				createdBy:user?.primaryEmailAddress?.emailAddress,
				userName:user?.fullName,
				userImageUrl:user?.imageUrl,
				postedOn:moment().format('DD/MM/yyyy')
			}).where(eq(CarListing.id,recordId)).returning({id:CarListing.id});
			console.log(result);
			navigate('/profile');
			setLoader(false);
		}
		else {
			try {
				const result=await db.insert(CarListing).values({
					...formData,
					features:featuresData,
					createdBy:user?.primaryEmailAddress?.emailAddress,
					userName:user?.fullName,
					userImageUrl:user?.imageUrl,
					postedOn:moment().format('DD/MM/yyyy')
				},
			).returning({id:CarListing.id});
				if(result) 
				{
					console.log("Data saved")
					setTriggerUploadImages(result[0]?.id);
					setLoader(false);
				}
			} catch(e) {
				setLoader(false);
				console.log("Error", e);
			}
		}
		
	}

	

  return (
    <div>
		<Header />
		<div className='px-10 md:px-20 my-10'>
			<h2 className='font-bold text-4xl'>Dodaj novi oglas</h2>
		</div>
		<form className='p-10 border rounded-xl mt-10'>
			{/* Car Details */}
				<div>
					<h2 className='font-medium text-xl mb-6'>Detalji oko auta</h2>
					<div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
						{carDetails.carDetails.map((item,index)=>(
							<div key={index}>
								<label className='text-sm flex gap-2 items-center mb-1'>
									<IconField icon={item?.icon}/>
									{item?.label} {item.required&&<span className='text-red-500'>*</span>} 
								</label>
								{item.fieldType=='text'||item.fieldType=='number'
								?<InputField item={item} handleInputChange={handleInputChange} carInfo={carInfo}/>
								:item.fieldType=='dropdown'
								?<DropdownField item={item} handleInputChange={handleInputChange} carInfo={carInfo}/>
								:item.fieldType=='textarea'
								?<TextAreaField item={item} handleInputChange={handleInputChange} carInfo={carInfo}/>
								:null}
							</div>
						))}
					</div>
				</div>
			<Separator className="my-6"/>
			{/* Features list */}
			<div>
				<h2 className='font-medium text-xl my-6'>Znacajke</h2>
				<div className='grid grid-cols-2 md:grid-cols-3 gap-2'>
					{features.features.map((item,index)=> (
						<div key={index} className='flex gap-2 items-center'>
							<Checkbox onCheckedChange={(value)=>handleFeatureChange(item.name, value)} 
								checked={featuresData?.[item.name]}
							/> <h2>{item.label}</h2>
						</div>
					))}
				</div>
			</div> 
			{/* Car Images */} 
			<Separator className="my-6"/>
			<UploadImages triggleUploadImages={triggerUploadImages}
			carInfo={carInfo}
			mode={mode}
			setLoader={(v)=>{setLoader(v);navigate('/profile')}} />

			<div className='mt-10 flex justify-end'>
				<Button type="submit" 
				disabled={loader}
				onClick={(e)=>onSubmit(e)}>
					{!loader?'Objavi':<BiLoaderAlt className='animate-spin text-lg'/>}
					</Button>
			</div>
		</form>
		
    </div>
  )
}

export default AddListing