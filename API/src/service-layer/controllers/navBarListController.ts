import { Controller, Get, Route, Tags } from "tsoa";
import { NavBarList } from "../../../data/data";
import { NavBarResponse } from "../responses/navbarResponse";

@Route('navbar')
@Tags('NavBarList')
export class NavBarListController extends Controller {
  @Get('/')
  public async getNavBarList(): Promise<NavBarResponse[]> {
    return NavBarList;
  }
}