import { environment } from 'src/environments/environment'

export const baseUrl = environment.production ? 'https://jd.eleks.com/secure/attachment/623071/db.json' : 'http://localhost:3000'
export const productsUrl = baseUrl + '/products'
export const cartUrl = baseUrl + '/cart'
export const wishlistUrl = baseUrl + '/wishlist'
