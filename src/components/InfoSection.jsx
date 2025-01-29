import React from 'react'

function InfoSection() {
  return (
    <section>
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8 mt.5">
    <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:items-center md:gap-8">
      <div className="md:col-span-3">
        <img
          src="https://prod.pictures.autoscout24.net/listing-images/436b74ec-639f-4d0e-9e23-5ec473b5a4cd_32b5e9bd-f885-4723-a6dc-e492354277da.jpg/720x540.webp"
          className="rounded-lg mt-5"
          alt=""
        />
      </div>

      <div className="text-2xl font-semibold text-gray-900 sm:text-3xl">
        <div className="">
          <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
		  Honda Civic 2.0 Type R Performanse i stil u savršenom spoju!.
          </h2>

          <p className="mt-4 text-gray-700 text-[20px]">
		  Honda Civic 2.0 Type R savršen je spoj performansi i stila! Sa 320 KS i ručnim mjenjačem, pruža adrenalinsku vožnju uz vrhunsku kontrolu. Sportski dizajn, agresivni aerodinamični detalji i udoban interijer čine ga idealnim za one koji traže snagu i praktičnost u jednom. S pređenih samo 29.613 km i prvom registracijom 2018., ovo vozilo je u izvrsnom stanju i spremno za nove avanture. Ne propustite priliku – kontaktirajte nas i osigurajte si ovu sportsku ikonu! 🚀🔥
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default InfoSection