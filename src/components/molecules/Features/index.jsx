//Features component
import React from 'react';

//Import components
import {
    ImageComponent,
    VideoComponent,
    FeatureText,
    Line
} from 'src/components/atom'

const Features = ({ feature, index }) => {

    return (
        <>
            <div className='w-full bg-black flex flex-col items-center justify-center py-20'>
                <div className='h-full w-full flex flex-col md:flex-row items-center justify-evenly md:justify-between sm:px-36 px-0 relative'>
                    {
                        (index === 0 || index === 2) &&
                        (
                            <>
                            <div className="relative w-2/3">
                                {
                                    index === 0 && (
                                        <>
                                            <ImageComponent className='relative z-[2] w-full' type="Monitor" alt="monitor" />
                                            <VideoComponent className="absolute w-[68%] top-[44%] left-[50%] z-[1] translate-x-[-50%] translate-y-[-50%]" />
                                        </>
                                    )
                                }
                                {
                                    index === 2 && <ImageComponent className='relative z-[2] w-full' type="Image" alt="movies"/>
                                }
                            </div>
                                <FeatureText feature={feature} />
                            </>
                        )
                    }
                    {
                        index === 1 && (
                            <>
                                <FeatureText feature={feature} />
                                <div className='w-full flex justify-center items-center'>
                                    <div className="relative w-full flex justify-center">
                                        <div className='relative w-[25%]'>
                                            <ImageComponent className='relative z-[3] w-[90%] top-[80%] left-[100%]' type="Tablet" alt="tablet" />
                                            <VideoComponent className="absolute w-[70%] top-[99.5%] left-[145%] z-[3] translate-x-[-50%] translate-y-[-50%]" />
                                        </div>
                                        <div className='relative w-3/4'>
                                            <ImageComponent className='relative z-[2] w-full' type="Monitor" alt="monitor" />
                                            <VideoComponent className="absolute w-[68%] top-[44%] left-[50%] z-[1] translate-x-[-50%] translate-y-[-50%]" />
                                        </div>
                                        <div className='relative w-[15%]'>
                                            <ImageComponent className='relative z-[2] w-[90%] rotate-90 top-[72%] right-[100%]' type="Phone" alt="phone" />
                                            <VideoComponent className="absolute w-full top-[96.5%] right-[50%] z-[3] translate-x-[-50%] translate-y-[-50%]" />
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    }
                </div>
            </div>
            <Line />
        </>
    );
};

export default Features;