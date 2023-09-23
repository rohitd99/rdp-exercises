import {motion} from 'framer-motion';

function WithFadeIn(Component)
{
    return(
        function WithFadeInComponent(props)
        {

            return(
                <motion.div
                    initial={{y: -150, opacity: 0 }}
                    animate={{y: 0,  opacity: 1 }}
                    transition={{ delay: 0.5,duration: 1.5}}
                >
                    <Component {...props}></Component>
                </motion.div>
            );
        }
    );
}

export default WithFadeIn;
