import { Header} from './header';
import { Body} from './body';

export interface Card {
	titulo: string;
	contador: number;
	nombre?: string;
	descripcion: string;
	header: Header;
	body: Body;

}
