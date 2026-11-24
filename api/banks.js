import {handleCloud} from '../server/cloud.mjs';
export function GET(request){return handleCloud(request,'banks');}
export function POST(request){return handleCloud(request,'banks');}
