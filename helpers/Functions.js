import imageUrlBuilder from '@sanity/image-url';

const ImageSnippets = ({image}) => {
    let imageUrl = ''
    const imgBuilder = imageUrlBuilder({
        projectId: 'j7y1lk5u',
        dataset: 'production',
      });
    
    if(image){
        imageUrl = imgBuilder.image(image)
    }

    return (
        <img className='my-20 m-auto' src={imageUrl} />
    )
}

const CodeSnippets = ({language, code}) => {
    return (
        <div className='my-20 mx-auto align-center border-2 p-10'>
            <span className='text-xs'>
                    {language}
            </span>
            <pre data-language={language} className='bg-slate-300'>
                    <code className="language-javascript">
                            {code}
                    </code>
            </pre>
        </div>
    )
}

export const serializers = {
    types: {
        code: ({ node }) => (
            <CodeSnippets language = {node.language} code = {node.code} /> 
        ),
        image: ({ node }) => {
            return (
            <ImageSnippets image = {node} /> 
         )}
    }
}