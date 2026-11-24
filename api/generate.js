import {handleCloud} from '../server/cloud.mjs';
export function POST(request){return handleCloud(request,'generate');}
