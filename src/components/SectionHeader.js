// import Divider from '@mui/material/Divider';

export default function SectionHeader(props) {
    return (
        <div id={props.section} className='flex flex-col mt-64 py-6 bg-gradient-to-r from-orange-500 to-purple-500 px-16 min-w-screen sm:max-w-max sm:mx-auto'>
            <h1 className="text-5xl font-bold   text-white text-center mb-5">{props.title}</h1>
            <h2 className='text-lg              text-white text-center'>{props.desc}</h2>
        </div>
    )
}