import { Button } from "@material-ui/core"

const AboutIncofibs = () => {
  return (
    <div className="aboutinco_outer py-[50px] md:px-[170px] px-[20px]">
      <div className="aboutinco">
        <h1 className="playfair heading_title">About InCoFIBS</h1>
        <p className="py-12 text-center">InCoFIBS is a prestigious international conference organised to provide a platform for industry experts, researchers, and students to effectively exchange ideas and recent advances in the various fields of Biological Sciences. It also provides a stage for budding student researchers to share their findings and ideas with global experts. The 3rd International Conference on Frontiers in Biological Sciences (InCoFIBS-2023) will be held in Rourkela, India, from 2nd to 4th February 2023.</p>
        {/* <Button
          style={{marginBottom: "20px"}}
          sx={{
              borderRadius: "40px",
              fontSize: "0.7rem",
              borderColor: "#ffffffba",
              color: "#ffffffba",
              "&:hover": {
                borderColor: "#E84C3D !important",
                color: "#E84C3D !important",
              },
          }}
          variant="outlined"
          >
            About NIT Rourkela
          </Button> */}
      </div>
    </div>
  )
}

export default AboutIncofibs