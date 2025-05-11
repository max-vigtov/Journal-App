import 'dotenv/config';
import { get } from 'env-var';


export const envs = {

	APIKEY: get('APIKEY').required().asString(),
	AUTHDOMAIN: get('AUTHDOMAIN').required().asString(),
	PROJECTID: get('PROJECTID').required().asString(),
	STORAGEBUCKET: get('STORAGEBUCKET').required().asString(),
	MESSAGINGSENDERID: get('MESSAGINGSENDERID').required().asString(),
	APPID: get('APPID').required().asString(),
  }
  