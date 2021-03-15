import { Model } from "sequelize";
import Character from "../model/character"

export interface ICharactersService {
    List(): Promise<any>

    SortWithFilter(sort: string, sortDirection: string, filterBy?: string, filterValue?: string): Promise<any>
}

class CharacterService implements ICharactersService {
    async List() {
        return _characterService.list()
    }

    async SortWithFilter(sort: string, sortDirection: string, filterBy?: string, filterValue?: string) {
        return _characterService.sortAndFilterList(sort, sortDirection, filterBy, filterValue)
    }
     
}

const _characterService: any = {}

_characterService.list = async () => {
    const characters = await Character.findAll();
    return characters;
}

_characterService.sortAndFilterList = async (sort: string, sortDirection: string, filterBy?: string, filterValue?: string) => {
    const characters = await Character.findAll({
        order: [[sort, sortDirection]],
        where: filterBy? {
            [`${filterBy}`]: filterValue || ""
        } : undefined
    })

    return characters
}

export default CharacterService