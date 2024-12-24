
import { Typewriter } from 'react-simple-typewriter'
const TheoremText = () => {
    const handleDone = () => {
        console.log(`Done after 5 loops!`)
    }
    return (
        <div>
            <h1 className='text-2xl md:text-5xl text-center' style={{ paddingTop: '5rem', margin: 'auto 0', fontWeight: 'normal' }}>
                Life is simple{' '}
                <span className='text-5xl text-[#331A15]' style={{ fontWeight: 'bold' }}>
                    {/* Style will be inherited from the parent element */}
                    <Typewriter
                        words={['Eat', 'Sleep', 'Code', 'Repeat!']}
                        loop
                        cursor
                        cursorStyle='_'
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                        onLoopDone={handleDone}

                    />
                </span>
            </h1>
        </div>
    );
};

export default TheoremText;