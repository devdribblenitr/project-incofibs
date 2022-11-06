import { Button } from "@material-ui/core"

const AboutIncofibs = () => {
  return (
    <div className="aboutinco_outer py-[50px] md:px-[170px] px-[20px]">
      <div className="aboutinco">
        <h1 className="playfair heading_title">About InCoFIBS</h1>
        <p className="pt-12 text-justify">InCoFIBS is a prestigious international conference organised to provide a platform for
industry experts, researchers, and students to effectively exchange ideas and recent
advances in the various fields of Biological Sciences. It also provides a stage for
budding student researchers to share their findings and ideas with global experts. The
3rd International Conference on Frontiers in Biological Sciences (InCoFIBS-2023) will
be held in Department of Life Science, National Institute of Technology Rourkela, India,
from 2nd to 4th February 2023.</p>
        <p className="py-3 text-justify">Life science is originally a biological discipline. But today it has matured into a form of
integrative science with technological advances in molecular biology and biotechnology
which has led to burgeoning of specializations and new interdisciplinary fields like
Epigenetics, Systems Biology, Molecular Biophysics, Nano Biotechnology,
Bioinformatics, etc.</p>
<p className="pb-12 pt-3 text-justify">Specific aims of this meeting will be to assemble three sessions consisting of total of 12
modules over three parallel sessions running for a span of three days. There will be
tentatively 3 key note sessions in every session followed by Plenary /Invited Lectures.
The program will start with a keynote/Inaugural address from a prominent Scientist from
India or Abroad.</p>

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