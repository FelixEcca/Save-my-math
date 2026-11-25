import {handleCloud} from '../server/cloud.mjs';
export function GET(request){return handleCloud(request,'status');}
