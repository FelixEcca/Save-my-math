import {handleCloud} from '../server/cloud.mjs';
export function POST(request){return handleCloud(request,'session');}
export function DELETE(request){return handleCloud(request,'session');}
