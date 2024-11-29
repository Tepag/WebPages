'use client'

interface GroupCardProps {
    image: string;
    title: string;
    description: string;
    whatsappLink: string;
    wechatLink: string;
    telegramLink: string;
    instagramLink: string;
}

export default function GroupCard({image, title, description, whatsappLink,wechatLink,telegramLink,instagramLink}: GroupCardProps) {

    return (
        <>
            <div className="relative flex h-full flex-col overflow-hidden ">
                <img className="rounded-t-lg h-full" src={image} alt="" />
                <div className="p-5">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
                    <div className="flex justify-center mt-2">
                        <a href={whatsappLink}>
                            <button className="inline-flex items-center px-2 py-2 mx-1 text-sm font-medium text-center text-white bg-gray-900 rounded-lg hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-purple-900 dark:bg-black-600 dark:hover:bg-gray-900 dark:focus:ring-purple-900">
                                <img src="whatsapp.svg" className="w-7 h-7" />
                            </button>
                        </a>

                        <a href={wechatLink}>
                            <button className="inline-flex items-center px-2 py-2 mx-1 text-sm font-medium text-center text-white bg-gray-900 rounded-lg hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-purple-900 dark:bg-black-600 dark:hover:bg-gray-900 dark:focus:ring-purple-900">
                                
                                <img src="wechat.svg" className="w-7 h-7" />
                            </button>
                        </a>

                        <a href={telegramLink}>
                            <button className="inline-flex items-center px-2 py-2 mx-1 text-sm font-medium text-center text-white bg-gray-900 rounded-lg hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-purple-900 dark:bg-black-600 dark:hover:bg-gray-900 dark:focus:ring-purple-900">
                                
                                <img src="telegram.svg" className="w-7 h-7" />
                            </button>
                        </a>

                        <a href={instagramLink}>
                            <button className="inline-flex items-center px-2 py-2 mx-1 text-sm font-medium text-center text-white bg-gray-900 rounded-lg hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-purple-900 dark:bg-black-600 dark:hover:bg-gray-900 dark:focus:ring-purple-900">
                                <img src="instagram.svg" className="w-7 h-7" />
                            </button>
                        </a>
                    </div>
                    
                </div>                                                          
            </div>                                                                                                                                                                                          
        </>
    );
}


