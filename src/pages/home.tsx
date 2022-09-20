import ComponentHome from "@components/ComponentHome"
import PagesLayout from "@components/PagesLayout"


const home = () => {
  return (
    <PagesLayout title="Home">
        <ComponentHome/>
    </PagesLayout>
  )
}

export default home