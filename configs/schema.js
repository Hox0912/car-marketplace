import { integer, json, pgTable, serial, varchar } from "drizzle-orm/pg-core";

export const CarListing=pgTable('carListing', {
    id:serial('id').primaryKey(),
    listingTitle:varchar('listingTitle').notNull(),
    sellingPrice:varchar('sellingPrice').notNull(),
    category:varchar('category').notNull(),
    condition:varchar('condition').notNull(),
    horsePower:varchar('horsePower'),
    fuelType:varchar('fuelType').notNull(),
    make:varchar('make').notNull(),
    model:varchar('model').notNull(),
    year:varchar('year').notNull(),
    driveType:varchar('driveType'),
    transmission:varchar('transmission').notNull(),
    kilometers:varchar('kilometers').notNull(),
    engineSize:varchar('engineSize'),
    cylinder:varchar('cylinder'),
    color:varchar('color'),
    door:varchar('door'),
    vin:varchar('vin'),
    listingDescription:varchar('listingDescription').notNull(),
    features:json('features'),
    createdBy:varchar('createdBy').notNull().default('mlgmaster912@gmail.com'),
    userName:varchar('userName').notNull().default('Ivek'),
    userImageUrl:varchar('userImageUrl').default('https://icons.veryicon.com/png/o/miscellaneous/standard/avatar-15.png'),
    postedOn:varchar('postedOn')
})

export const CarImages=pgTable('carImages', {
    id:serial('id').primaryKey(),
    imageUrl:varchar('imageUrl').notNull(),
    carListingId:integer('carListingId').references(()=>CarListing.id).notNull()
})