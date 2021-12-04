import useResource from '../hooks/useResource'
export default function Footer() {
  const {resources } = useResource();  
    return (
        <footer className="text-center bg-green-700 ">
          
        <p>{resources?.length} Locations World Wide</p>
      </footer>
    )
}