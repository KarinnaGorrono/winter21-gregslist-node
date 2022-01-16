import { Auth0Provider } from '@bcwdev/auth0provider'
import { housesService } from '../services/HousesService'
import BaseController from "../utils/BaseController";



export class HousesController extends BaseController {
    constructor() {
        super('api/houses')
        this.router
            .get('', this.getAll)
    }



    async getAll(req, res, next) {
        try {
            const houses = await housesService.getAll()
            res.send(houses)
        } catch (error) {
            next(error)
        }
    }

}