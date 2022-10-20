import { Button } from "@material-ui/core"

const AboutIncofibs = () => {
  return (
    <div className="aboutinco_outer py-[50px] md:px-[170px] px-[20px]">
      <div className="aboutinco">
        <h1 className="playfair heading_title">About InCoFIBS</h1>
        <p className="py-12 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro earum accusantium excepturi error ab tenetur amet, sed veritatis quas aperiam qui provident nesciunt!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro earum accusantium excepturi error ab tenetur amet, sed veritatis quas aperiam qui provident nesciunt!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro earum accusantium excepturi error ab tenetur amet, sed veritatis quas aperiam qui provident nesciunt!</p>
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