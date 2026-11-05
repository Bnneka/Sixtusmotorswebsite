import {handleChat} from '../../../lib/chat-handler.mjs';
export const runtime='nodejs';
export const maxDuration=30;
export async function POST(request){return handleChat(request)}
