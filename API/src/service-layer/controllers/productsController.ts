import { Controller, Get, Route, Tags } from 'tsoa';
import { PaginationItems, SplOfferData } from '../../../data/data';
import { ProductResponse } from '../responses/productResponse';

@Route('products')
@Tags('Products')
export class ProductsController extends Controller {
  @Get('/')
  public async getProducts(): Promise<ProductResponse[]> {
    return PaginationItems;
  } 
  
  @Get('/special-offer-items')
  public async getSpecialOfferProducts(): Promise<ProductResponse[]> {
    return SplOfferData;
  }
}