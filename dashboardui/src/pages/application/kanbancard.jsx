
import { Card, CardContent, CardHeader, CardFooter } from '/src/components/ui/card'
import { Ellipsis, Plus, Clock, UsersRound, Paperclip, MessageCircleMore } from 'lucide-react'
import React from 'react'

function KanbanCard() {
    return (
        <Card className={`border-2 w-96 p-0 overflow-hidden gap-0 pb-8`}>
            <div className='h-1 bg-[#6E39CB]'></div>
            <div className='flex justify-between items-center px-4 py-3 bg-[#F4F5F9] '>
                <h1>Todo task</h1>
                <Ellipsis />
            </div>
            <CardContent className={`space-y-8`}>
                <div className='border-dashed border-2 rounded-lg flex justify-center items-center py-1.5 mt-4'>
                    <Plus />
                </div>
                <Card className={`py-3 space-y-7`}>
                    <CardHeader className={`flex justify-between`}>
                        <div className='space-y-5'>
                            <h1 className='text-base'>Webdev</h1>
                            <div className='text-[#89868D] text-sm flex items-center gap-2'><UsersRound className='size-5' /> <p>Cisco Team</p></div>
                        </div>
                        <div className='text-[#89868D] flex w-20 gap-2 leading-5'><Clock />
                            <h1>12 Days</h1></div>
                    </CardHeader>
                    <CardFooter className={`flex justify-between`}>
                        <div className='flex gap-6'>
                            <div className='flex gap-2.5 text-[#89868D]'>
                                <Paperclip className='size-6' /> <p>7</p>
                            </div>
                            <div className='flex gap-2.5 text-[#89868D]'>
                                <MessageCircleMore className='size-6' /> <p>8</p>
                            </div>
                        </div>
                        <div className='flex gap-2'>
                            <div className='size-8 rounded-full bg-[#F4F5F9] flex justify-center items-center'>
                                <Plus className='size-5 text-[#6E39CB]' />
                            </div>
                            <div className='flex '>
                                <div className='size-8 rounded-full flex justify-center items-center'>
                                    <img src="images/person.png" alt="" />
                                </div>
                                <div className='size-8 rounded-full flex justify-center items-center -ml-2'>
                                    <img src="images/person.png" alt="" />
                                </div>
                                <div className='size-8 rounded-full flex justify-center items-center -ml-2'>
                                    <img src="images/person.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </CardFooter>
                </Card>
            </CardContent>
        </Card>
    )
}

export default KanbanCard

