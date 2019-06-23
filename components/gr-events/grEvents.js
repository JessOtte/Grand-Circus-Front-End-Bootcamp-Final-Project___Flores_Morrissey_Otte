function GrEvents(EventService, $q) {
    const ctrl = this;

      
	         ctrl.grEvents = [
	        {
			destination:"Frederik Meijer Gardens",
			outdoor: true,
	        rank:'1',
	        googleReview: "4.8",
	        summary: "Colorful gardens filled with art & music",
	        description: "Sprawling botanical gardens with diverse sculptures hosts indoor art exhibits & summer concerts.",
	        website: "https://www.meijergardens.org/",
	        img:"https://media.wzzm13.com/assets/WZZM/images/43c8ba3c-511c-4833-b847-326811170009/43c8ba3c-511c-4833-b847-326811170009_750x422.png",
	        },
	        {
			  destination:"John Ball Zoo",
			  outdoor: true,
	          rank: "2",
	          googleReview: "4.5",
	          summary: "Interactive zoo with an aquarium",
	          description: "Exhibits include touchable stingrays, feedable parakeets & camel rides, plus aquarium with penguins.",
	          website: "https://www.jbzoo.org/",
	          img: "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwjjhp7N7PHiAhVIJt8KHccfA6cQjRx6BAgBEAU&url=https%3A%2F%2Fwww.woodtv.com%2Fnews%2Fgrand-rapids%2Fkids-can-go-to-john-ball-zoo-free-on-fridays%2F&psig=AOvVaw3L7h2Vz-5XmtMIxpmlm99h&ust=1560906660834161",
	          },
	          {
				destination:"Grand Rapids Public Museum",
				outdoor: false,
	            rank: "3",
	            googleReview: "4.6",
	            summary: "Museum & planetarium in an ex-flour mill",
	            description: "Museum offers 3 floors of history in an ex-flour mill plus exhibits, a 1928 carousel & planetarium",
	            website: "https://www.grpm.org/",
	            img: "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwiBl4vo7PHiAhVsUN8KHdCvDowQjRx6BAgBEAU&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FGrand_Rapids_Public_Museum&psig=AOvVaw1B9-pK2fsbMqk9DiRtzsdn&ust=1560906720568089",
	            },
	            {
				  destination:"Grand Rapids Art Museum",
				  outdoor: false,
	              rank: "4",
	              googleReview: "4.5",
	              summary: "Mod space for 19th- & 20th-century art",
	              description: "Modern space filled with U.S. & European art offers family-friendly activities & classical concerts.",
	              website: "http://www.artmuseumgr.org/",
	              img: "https://lh4.googleusercontent.com/-I7FwDbcHW4k/WTcwywWRHDI/AAAAAAAA5J8/9H5N-6EiLUs3OwWSnhrtslAPc_irEn7bACLIB/w100-h134-n-k-no/",
	              },
	              {
					destination:"The Gerald Ford Presidential Museum",
					outdoor: false,
	                rank: "5",
	                googleReview: "4.6",
	                summary: "Interactive exhibits on president's life",
	                description: "Museum tells Ford's life story using artifacts, interactive exhibits & a replica of the Oval Office.",
	                website: "https://www.fordlibrarymuseum.gov/",
	                img: "https://www.fordlibrarymuseum.gov/img/Museum-Education-Center.jpg",
	                },
			{
					destination:"Millennium Park",
					outdoor: true,
	                rank: "6",
	                googleReview: "4.6",
	                summary: "Urban green space with beach, Splashpad & wetlands",
	                description: "Vast urban park reclaims heavily used land for 6-acre beach, splashed & wetlands with hiking trails.",
	                website: "http://www.kentcountyparks.org/millennium/index.php",
	                img: "https://lh4.googleusercontent.com/proxy/Y4Ws_zcxBamtFjQrxgLoO-t4eiMs2Co9QcjZbyTAuBv0cD0nMwSiJ7O6m-gy21JpuYRsqbbdiodHAdY7A7BPIqhImoGoNqywyev5PJZtlOvIOkUAk1z9bAcP9K1YpuGRQ3hiiigGeFoJVooUnSRVVnghqQY=w200-h268-n-k-no",
	                },
	              {
					destination:"Grand Rapids Children's Museum",
					outdoor: false,
	                rank: "7",
	                googleReview: "4.6",
	                summary: "Interactive workshops for children",
	                description: "Hands-on learning space for kids ages 2-10 features a real beehive & workshops like robot building.",
			website: "http://www.grcm.org/",
	                img: "https://lh4.googleusercontent.com/-gVldjeyBzUM/WScTlL2r4II/AAAAAAAASzU/-UhiVA4F0Bg2a7Z15mBN9ZuF54VaWNmzwCLIBGAYYCw/w200-h268-n-k-no/",
			weather: "",
	                },
	              {
					destination:"Rosa Parks Circle",
					outdoor: true,
	                rank: "8",
	                googleReview: "4.6",
	                summary: "Ice-skating & concert space",
	                description: "Designed by artist Maya Lin, this public plaza offers ice skating in winter & concerts in summer.",
	                img: "https://lh6.googleusercontent.com/proxy/l7dISAeDlwZMpW_pN_h_vtrldq4UJUEuzQJYTbvjbQ53fkt4abrDEjInwD5xm-bFH3AJ7RrRqyhRfm7Q7Be7jkyRHeRHLX4OADq9HPbPTR6u3XEXTJO4rdVm_6lrIZl1znSY8919CCsctnzSW6dfJLdK2Ew=w200-h268-n-k-no",
			website: "https://www.grandrapidsmi.gov/Government/Departments/Parks-and-Recreation/Rosa-Parks-Circle-Ice-Rink",
			weather: "",
	                },
	              {
					destination:"Downtown Market Grand Rapids",
					outdoor: true,
	                rank: "9",
	                googleReview: "4.6",
	                summary: "Year-round local food market",
	                description: "A year-round hub of local food innovation, healthy-living education and right-before-your-eyes preparation.",
	                img: "https://lh6.googleusercontent.com/-olTxrhVE4fc/WGuc2oxQJrI/AAAAAAAAjaQ/foMBoS_3hagCVSF9Jw7N2DyxPIC2BHPPACLIB/w200-h268-n-k-no/",
			website: "http://downtownmarketgr.com/",
			weather: "",
	                },
	              {
					destination:"Meyer May House",
					outdoor: false,
	                rank: "10",
	                googleReview: "4.6",
	                summary: "Frank Lloyd Wright home with free tours",
	                description: "Restored early-1900s home designed by Frank Lloyd Wright, with free guided tours some days.",
	                img: "https://lh3.googleusercontent.com/-rRv6tKX4TXk/WLmPvYj6RSI/AAAAAAABBCc/xYsEm2J5NEEcfiMlilAZ70JBDDoOiPJ2QCLIB/w200-h268-n-k-no/",
			website: "http://meyermayhouse.steelcase.com/",
			weather: "",
	                },
	              {
					destination:"Robinette's Apple Haus & Winery",
					outdoor: false,
	                rank: "11",
	                googleReview: "4.6",
	                summary: "Orchard, winery, trail running, and running",
	                description: "Established in 1911, Robinette's Apple Haus & Winery has been a West Michigan staple for over 100 years. Visit for activities, donuts, cider, gifts & more.",
	                img: "https://lh3.googleusercontent.com/-ntzvZ6Sgq2I/Ws-bkunIreI/AAAAAAAAAJ4/5rbBit4PIIUYUsFm9hrdOeq01R5BWtxCgCLIBGAYYCw/w200-h268-n-k-no/",
			website: "http://www.robinettes.com/",
			weather: "",
	                },
	              {
					destination:"Heritage Hill",
					outdoor: true,
	                rank: "12",
	                googleReview: "4.6",
	                summary: "",
	                description: "",
	                img: "https://lh4.googleusercontent.com/proxy/tGg-SJde2e-QpKmGB6SVtGGC1UxSiUf275N2CZ6kLeZl7oplwixYs9WU_CzovncDgsLOX6wK7rZPy2Y7908EB7EQ_2rONI9d1Zu9X-vweqvzZw6PWFrc8gznMp7b079wRUWaE0eMqgylWA1UK73ylPBoEgE=w200-h268-n-k-no",
			website: "https://en.wikipedia.org/wiki/Heritage_Hill_Historic_District_(Grand_Rapids,_Michigan)",			
			weather: "",
	                },
	              {
					destination:"Salvation Army Kroc Center",
					outdoor: false,
	                rank: "13",
	                googleReview: "4.6",
	                summary: "Community center",
	                description: "Located on 20+ acres, the 105,000 square-foot Salvation Army Kroc Center is unique in the Grand Rapids area. On the surface, you’ll see a fitness center; a church; recreation areas like a pool, a gym, and a climbing wall. ",
	                img: "https://lh5.googleusercontent.com/p/AF1QipN-Ocv_1_I4eL435KQbGy6Z97kEehJuyrJtxzfe=w319-h160-k-no",
			website: "http://www.grkroccenter.org/",
			weather: "",
	                },
	              {
					destination:"Craigs Cruisers",
					outdoor: false,
	                rank: "14",
	                googleReview: "4.6",
	                summary: "Family fun center",
	                description: "Family fun center offering go-karts, bumper boats, mini golf, laser tag & more, plus a pizza buffet.",
	                img: "https://lh4.googleusercontent.com/-0NHzkZM97lQ/WMNKySUGn4I/AAAAAAAACDQ/eGGcyOlwnbUxtT6Ahi_8f9Npbloq2RtWwCLIBGAYYCw/w200-h268-n-k-no/",
			website: "http://www.craigscruisers.com/",
			weather: "",
	                },
	              {
					destination:"Three Mile Project",
					outdoor: false,
	                rank: "15",
	                googleReview: "4.6",
	                summary: "Youth Community Center",
	                description: "A 34,000 square foot former warehouse that now contains sports courts, theaters, a skate park, a ninja course, video games, table games, and a cafe.",
	                img: "https://i.ytimg.com/vi/ITcn7mrfzAs/maxresdefault.jpg",
			website: "http://3mp.org/",
			weather: "",
	                },
	              {
					destination:"Urban Institute for Contemporary Arts",
					outdoor: false,
	                rank: "16",
	                googleReview: "4.6",
	                summary: "Art exhibits, theater, music & more",
	                description: "Multi-use facility devoted to the creative arts, with programs in visual arts, film, music & dance.",
	                img: "https://lh3.googleusercontent.com/-5yo6FsFyBh8/WP-HPu6D78I/AAAAAAAAAUs/bH3YAtMlRTUk0IqoYgmuIBw1S1ctrm0FQCLIBGAYYCw/w200-h268-n-k-no/",
			website: "http://www.uica.org/",
			weather: "",
	                },
	              {
					destination:"Cannonsburg Ski Area",
					outdoor: true,
	                rank: "17",
	                googleReview: "4.6",
	                summary: "Tubing, Skiing & Zipline",
	                description: "Celebrate your important day with family and friends in a rustic, ski lodge setting overlooking beautiful views of Cannonsburg ski area.",
	                img: "https://img2.onthesnow.com/image/xl/10/100063.jpg",
			website: "https://cannonsburg.com/",
			weather: "",
	                },
	              {
					destination:"Fish Ladder Park",
					outdoor: true,
	                rank: "18",
	                googleReview: "4.6",
	                summary: "Park for fishing & fish migration",
	                description: "Destination for watching fish migrate via special ladder, with separate areas for fishing in river.",
	                img: "https://lh3.googleusercontent.com/-5uRdDXHhklc/WBO0MvdmoJI/AAAAAAAA-ck/6-9sIs2vXpM4QaXOG50ShGBgCj6_aoxzACLIB/w200-h268-n-k-no/",
			website: "https://www.friendsofgrparks.org/parks/find-a-park/fish-ladder-park/",
			weather: "",
	                },
	              {
					destination:"La Grande Vitesse - Calder Plaza",
					outdoor: true,
	                rank: "19",
	                googleReview: "4.6",
	                summary: "Huge sculpture by Alexander Calder",
	                description: "This abstract red sculpture, created by Alexander Calder in 1969, anchors a large city plaza.",
	                img: "https://lh5.googleusercontent.com/proxy/GBlhEc2KkntbrJ3AhGxBQUhPxQyI-VrMigI-O1SrlLpx95XeD_qwJhRU-Hel3RQAOcXm1RS8C-4Ey_phzUBf0h7ebQAACZPENMuUAdPoUMTuBS0ijg4abv42xPJx6IIxYao3m_1qZPh8nxqZdGKXlsTpW4s=w200-h268-n-k-no",
			website: "http://arts.gov/about/40th-anniversary-highlights/initial-public-art-project-becomes-landmark",
			weather: "",
	                },
	              {
					destination:"Reed’s Lake",
					outdoor: true,
	                rank: "20",
	                googleReview: "4.6",
	                summary: "Year-round fishing plus a park & trail",
	                description: "Large, scenic lake on a park with a walking path, public boat launch & year-round fishing.",
	                img: "https://lh4.googleusercontent.com/proxy/kKhzCRhAqOevT-y2qLp1ASzMz0lw54hzd_h_a66qk6A-vsgDluPJgElWTidUX5huMWFJJDaM3RLxgXdEw7CteyWqqnsQxSKFSwrtPwEenm_PPCDxlw-sULy0EfTq_bh5bXHq_Ek38fgbNaznhb98fYbMQZ0K5-PGSpk=w200-h268-n-k-no",
			website: "https://en.wikipedia.org/wiki/Reeds_Lake",
			weather: "",
	                },
	              {
					destination:"TreeRunner Grand Rapids Adventure Park",
					outdoor: true,
	                rank: "21",
	                googleReview: "4.6",
	                summary: "Outdoor adventure park & obstacle course",
	                description: "Outdoor adventure park featuring obstacle courses with zip-lines, swinging logs & rope bridges.",
	                img: "https://lh5.googleusercontent.com/-Vaud8FFSk0s/W1u8mE2iuqI/AAAAAAAAAjM/pXX3WgKALuMCTThcIsAgkd9uR7wVB_fGgCLIBGAYYCw/w200-h268-n-k-no/",
			website: "http://www.treerunnergrandrapids.com/",
			weather: "",
	                },
	              {
					destination:"Provin Trails",
					outdoor: true,
	                rank: "22",
	                googleReview: "4.6",
	                summary: "Park for hiking & cross-country skiing",
	                description: "46-acre forested park with interconnected loops of natural trails for hiking & cross-country skiing.",
	                img: "https://lh3.googleusercontent.com/-5_0dteajnes/WMPky5J6m6I/AAAAAAAASBM/g2cr4PidQ58dcaiPhaLa0lvfaRDU9HYKwCLIB/w200-h268-n-k-no/",
			website: "http://www.kentcountyparks.org/provintrails/index.php",
			weather: "",
	                },
	              {
					destination:"Riverside Park",
					outdoor: true,
	                rank: "23",
	                googleReview: "4.6",
	                summary: "Hiking, biking, fishing & disc golf",
	                description: "Nature trails for hiking, biking & bird-watching plus fishing, kayaking, winter sports & disc golf.",
	                img: "https://lh4.googleusercontent.com/-EPmsP2NTLKs/Wdva66QC0ZI/AAAAAAAASxw/4904dMz_6hMXP3sGRlXUC2ydJ0yJAMswQCLIBGAYYCw/w200-h268-n-k-no/",
			website: "https://www.grandrapidsmi.gov/Directory/Places/Parks/Riverside-Park",
			weather: "",
	                },
	              {
					destination:"Catch Air Grand Rapids",
					outdoor: false,
	                rank: "24",
	                googleReview: "4.6",
	                summary: "Inflatables & Jungle Gym Place Center",
	                description: "Play center for children 12 and under",
	                img: "https://lh5.googleusercontent.com/-f5Z9p5kA3zY/Wu4BWvh181I/AAAAAAAADUw/WF0vJ3kORI4LEUOzWyIP22L0sfHG8dntQCLIBGAYYCw/w200-h268-n-k-no/",
			website: "https://catchairparty.com/location/grand-rapids/",
			weather: "",
	                },
	              {
					destination:"Oasis Hot Tub Gardens",
					outdoor: true,
	                rank: "25",
	                googleReview: "4.6",
	                summary: "Hourly hot tub rentals",
	                description: "A calm, restorative effects of indulging in a hot tub combined with the visually soothing surroundings of a well-tended indoor or outdoor garden setting.",
	                img: "https://oasishottubs.com/wp-content/uploads/2019/03/Casablanca-fall-2018.png",
			website: "http://www.oasishottubs.com/",
			weather: "",
	                },
	              {
					destination:"Boulder Ridge Wild Animal Park",
					outdoor: true,
	                rank: "26",
	                googleReview: "4.6",
	                summary: "Wildlife Park",
	                description: "Set on 80 acres, this private zoo hosts a range of exotic animals, many that can be touched.",
	                img: "https://grkids.com/wp-content/uploads/2015/06/Boulder-Ridge-Animal-Park-1.jpg",
			website: "https://www.boulderridgewap.com/",
			weather: "",
	                },
	              {
					destination:"Cathedral of Saint Andrew",
					outdoor: false,
	                rank: "27",
	                googleReview: "4.6",
	                summary: "Cathedral",
	                description: "The Cathedral of Saint Andrew is a Catholic cathedral located in Grand Rapids, Michigan, United States. It is the seat of the Diocese of Grand Rapids.",
	                img: "https://lh4.googleusercontent.com/-ggXeMPkRNbs/WO2LDzflUfI/AAAAAAAAABQ/Uq7dN8lEelUtfNycx0q9Iuq5Hf16Pa_UgCLIB/w200-h268-n-k-no/",
			website: "http://cathedralofsaintandrew.org/",
			weather: "",
	                },
	              {
					destination:"GO Scavenger Hunts",
					outdoor: true,
	                rank: "28",
	                googleReview: "4.6",
	                summary: "Self-guided Scavenger Hunt",
	                description: "Twenty plus challenges. Two hours. One epic adventure.",
	                img: "https://photos.scavengerhunt.com/scavenger_hunt_locations/Downtown_Grand_Rapids_Scavenger_Hunt_Grand_Rapids_Michigan_team_building_1528992285_large.jpg",
			website: "",
			weather: "",
	                },
	              {
					destination:"Ah-Nab-Awen Park",
					outdoor: true,
	                rank: "29",
	                googleReview: "4.6",
	                summary: "Riverfront hangout with city views",
	                description: "Small park on the Grand River with city views & a large grassy area for community events.",
	                img: "https://lh3.googleusercontent.com/proxy/G5G2x7LI5AAa1h4VNnsxnr9ei5LIjbHlIR0l_rEnVo64iX_GRS3xj9-dduIxzOR1rCh54AVhJ31qmDlpDs1pBUKowUIGZwnNbLtoHbFgJ6Rqn6zmvx_-4TuXg9Nr-8UULrRGmOCTEUIIQHBR-FLKsWorz-g=w200-h268-n-k-no",
			website: "http://www.friendsofgrparks.org/parks/find-a-park/ah-nab-awen/",
			weather: "",
	                },
	              {
					destination:"Blandford Nature Center",
					outdoor: true,
	                rank: "30",
	                googleReview: "4.6",
	                summary: "Enjoy, explore, and learn in nature",
	                description: "We lease 143 acres from the City of Grand Rapids and own 121 acres to use both the land and wildlife as the perfect backdrop to provide experiences that engage people to actively use and interact with our environment, our heritage and our connection to natural systems, as well as empower people to embrace nature, new perspectives, and sustainable practices.",
	                img: "https://townsquare.media/site/45/files/2017/05/blandford-nature-center-fairey-homes.jpg?w=980&q=75",
			website: "https://blandfordnaturecenter.org/",
			weather: "",
	                },
	              {
					destination:"Ecosystem Preserve",
					outdoor: true,
	                rank: "31",
	                googleReview: "4.6",
	                summary: "Nature and hiking",
	                description: " The Ecosystem Preserve features 44 public acres of forest, wetlands, and native gardens. Admission is free. Over a mile of walking trails are open every day from dawn to dusk.",
	                img: "https://media-cdn.tripadvisor.com/media/photo-s/09/b4/76/37/calvin-college-ecosystem.jpg",
			website: "http://www.calvin.edu/academic/eco-preserve/",
			weather: "",
	                },
	              {
					destination:"Schwallier's Country Basket",
					outdoor: true,
	                rank: "32",
	                googleReview: "4.6",
	                summary: "Corn maze, donuts and u-pick apples",
	                description: "Apple orchard and farm market where you can savor life's simple pleasures.",
	                img: "https://res.cloudinary.com/simpleview/image/upload/crm/grandrapids/Schwallier-s_Country_Basket_0002_c816e9a6-5056-a36a-06153e2b95cd20b6.jpg",
			website: "http://www.schwalliers.com/",
			weather: "",
	                },
	              {
					destination:"Kent Trails",
					outdoor: true,
	                rank: "33",
	                googleReview: "4.6",
	                summary: "Nature trails for hiking & biking",
	                description: "Kent Trails is a fifteen-mile rail trail in Kent County, Michigan that runs through the cities of Grand Rapids, Grandville, Walker, Wyoming and Byron Township and is part of a network of.",
	                img: "https://lh4.googleusercontent.com/proxy/Nuz9pUmZzL5VD3aY_gKn_2ZxnYZPEaRfU5PP-FBdAuzfBCToubs9FGgnOQH4lMqLtEUeXFQndGgTJLfPVBMpU5Zt1XipxW4_wImukYYdujj0qkkfDcwTbcLbtg-OCuZn9BWZlE23PzD52J6tqQqNy7wHJ55UB6Ua7_g=w200-h268-n-k-no",
			website: "https://en.wikipedia.org/wiki/Kent_Trails",
			weather: "",
	                },
	              {
					destination:"Great Lakes Pub Cruiser",
					outdoor: false,
	                rank: "34",
	                googleReview: "4.6",
	                summary: "A 16 person bike that looks like a rolling bar",
	                description: "We are a 16 person party bike in Grand Rapids MI. Our season is from March 17 to Oct 31. You must have at least 6 people to rent the bike for a tour and no more than 16 people.",
	                img: "https://lh5.googleusercontent.com/p/AF1QipNCQQPqNz7zjFlTpXbMfx9NOJiZE603S9iYJpjJ=w213-h160-k-no",
			website: "https://greatlakespubcruiser.com/",
			weather: "",
	                },
	              {
					destination:"Escape Michigan - Escape Rooms",
					outdoor: false,
	                rank: "35",
	                googleReview: "4.6",
	                summary: "Fun & Interactive team building challenge",
	                description: "Escape Michigan lets your team race against the clock to discover hidden clues and challenges. Using teamwork and skill, your group must work together to solve puzzles and escape the room!",
	                img: "https://lh6.googleusercontent.com/-0C3aBWAHpfY/W_7vC5ByBSI/AAAAAAAAC5o/9gbokyrqhDIJ2yEJz-FfZvCAks5a3fYwQCLIBGAYYCw/w200-h268-n-k-no/",
			website: "http://escapemichigan.com/",
			weather: "",
	                },
	              {
					destination:"AJ'S family fun center",
					outdoor: false,
	                rank: "36",
	                googleReview: "4.6",
	                summary: "Kid-friendly games, go-karts & arcade",
	                description: "Kid-oriented entertainment center featuring mini-golf, go-karts, laser tag, arcade games & more.",
	                img: "https://lh3.googleusercontent.com/-tjIoWFt0-7o/VaPEFPhx4RI/AAAAAAAAAA4/E4aZv2TgtBAyjYXfRKx3H4HTdtgp2JyjwCLIBGAYYCw/w200-h268-n-k-no/",
			website: "http://ajsfamilyfun.com/",
			weather: "",
	                },
	              {
					destination:"Grand Rapids African American Museum & Archives",
					outdoor: false,
	                rank: "37",
	                googleReview: "4.6",
	                summary: "Folksy exhibits & oral histories",
	                description: "Homespun exhibits honoring the history of the local black community, with a gift shop.",
	                img: "https://lh6.googleusercontent.com/-IqxshDodw2Q/W8j4Dum9WvI/AAAAAAABjY4/ZeJbKXIVJhEl8qSjy_b9mmhg7kRKE2X7wCLIBGAYYCw/w200-h268-n-k-no/",
			website: "http://www.graama.org/",
			weather: "",
	                },
	              {
					destination:"Hillcrest Dog Park",
					outdoor: true, 
	                rank: "38",
	                googleReview: "4.6",
	                summary: "Dog Park",
	                description: "Fenced in park for dogs with two separate areas for big and small dogs.",
	                img: "https://lh3.googleusercontent.com/-31WXmn27NrE/UlWCnOwi9bI/AAAAAAAACXg/h8Xi3PmumvoI4INwNDZ9wJ2xV7zUUKfLgCLIB/w200-h268-n-k-no/",
			website: "http://grcity.us/",
			weather: "",
	                },
	              {
					destination:"Richmond Park",
					outdoor: true,
	                rank: "39",
	                googleReview: "4.6",
	                summary: "Sports, trails, a pond & a swimming pool",
	                description: "Large park featuring various sports facilities, plus trails, a playground, a pond & an outdoor pool.",
	                img: "https://lh3.googleusercontent.com/-ypsH4_0KZUA/WyAkh5vI-VI/AAAAAAAABAI/MZ4gkdGt5dUW5FJp6HiuJImqZwi7CAw5gCLIBGAYYCw/w200-h268-n-k-no/",
			website: "http://www.friendsofgrparks.org/parks/find-a-park/richmond-park/",
			weather: "",
	                },
	              {
					destination:"Huff Park",
					outdoor: true, 
	                rank: "40",
	                googleReview: "4.6",
	                summary: "Playground, field & a wetlands boardwalk",
	                description: "City park with a playground & ball field, plus a wetlands boardwalk trail with interpretive signs.",
	                img: "https://lh6.googleusercontent.com/-cWvzFONM3xE/W143m_77puI/AAAAAAAAQrg/iTQIQKcXQfocEfPIvWsGXZHt9mHqGxLKwCLIBGAYYCw/w200-h268-n-k-no/",
			website: "http://www.friendsofgrparks.org/parks/find-a-park/huff-park/",
			weather: "",
	                },
	              {
					destination:"The Murder Mystery Company",
					outdoor: false,
	                rank: "41",
	                googleReview: "4.6",
	                summary: "Interactive Dinner",
	                description: "Dinner theater chain where audience participation helps actors solve a murder mystery.",
	                img: "https://www.osf.com/wp-content/uploads/2018/10/OSF-murder-mystery-wide-group-whodunnit-1-1200x713.jpg",
			website: "https://www.grimprov.com/",
			weather: "",
	                },
	              {
					destination:"Johnson Park",
					outdoor: true, 
	                rank: "42",
	                googleReview: "4.6",
	                summary: "Riverside natural area with trails",
	                description: "Natural area on the Grand River with play fields, trails, picnic shelters & fishing.",
	                img: "https://lh6.googleusercontent.com/-KYblNq4pNl8/W93qYs17wkI/AAAAAAAAPmY/UfqnxilCge0KypgqI4CNuNjXOM4yZx4IQCLIBGAYYCw/w200-h268-n-k-no/",
			website: "https://www.kentcountyparks.org/johnson/index.php",
			weather: "",
	                },
	              {
					destination:"Target Axe Throwing",
					outdoor: true,
	                rank: "43",
	                googleReview: "4.6",
	                summary: "Indoor axe throwing range",
	                description: "Grand Rapids' first indoor axe throwing range!",
	                img: "https://i0.wp.com/www.grmag.com/wp-content/uploads/2019/04/Target-Axe-Throwing.jpg?fit=1024%2C538&ssl=1",
			website: "",
			weather: "",
	                },
	              {
					destination:"Fowling Warehouse Grand Rapids",
					outdoor: false,
	                rank: "44",
	                googleReview: "4.6",
	                summary: "Hybrid sport of football & bowling",
	                description: "Hybrid sport of football & bowling",
	                img: "https://presenter-production.s3.amazonaws.com/photos2/47783/size_q/IMG_8746.jpg?1518556286",
			website: "http://www.fowlingwarehouse.com/",
			weather: "",
	                },
	              {
					destination:"Beer City Ale Trail",
					outdoor: true,
	                rank: "45",
	                googleReview: "4.6",
	                summary: "Self-guided tour of Breweries in Grand Rapids",
	                description: "Download the map and enjoy the day exploring Beer City USA",
	                img: "http://res.cloudinary.com/simpleview/image/upload/v1445225901/clients/grandrapids/ExpGR2015BeerMapsheet_466ae912-4050-43ca-b0b0-732591c4353c.pdf",
			website: "http://res.cloudinary.com/simpleview/image/upload/v1445225901/clients/grandrapids/ExpGR2015BeerMapsheet_466ae912-4050-43ca-b0b0-732591c4353c.pdf",
			weather: "",
	                },

	              {
					destination:"Lamar Park",
					outdoor: true,
	                rank: "46",
	                googleReview: "4.6",
	                summary: "Warm-weather spot for sports & splashing",
	                description: "This seasonal park has a splash pad plus a climbing wall, sports fields, fishing & a walking trail.",
	                img: "https://lh3.googleusercontent.com/-453jXHtH0tI/XEzKbt4pFMI/AAAAAAAAMb8/AhpecrK93icd9LuJHNi09tttQqfGlnwmgCLIBGAYYCw/w200-h268-n-k-no/",
			website: "https://www.wyomingmi.gov/About-Wyoming/City-Departments/Parks-and-Recreation/Parks",
			weather: "",
	                },
	              {
					destination:"Dave & Buster's",
					outdoor: false,
	                rank: "47",
	                googleReview: "4.6",
	                summary: "Adult Arcade",
	                description: "Family-friendly chain offering a sports-bar-style setting for American food & arcade games.",
	                img: "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwiVisCc7PHiAhUoUt8KHeh3CNcQjRx6BAgBEAU&url=https%3A%2F%2Fwww.daveandbusters.com%2Fterms-of-use&psig=AOvVaw1BRG1ZeQ5iZqgGlWuUAz-D&ust=1560906559835745",
			website: "",
			weather: "",
	                },
	              {
					destination:"Tarry Hall Roller Rink ",
					outdoor: false,
	                rank: "48",
	                googleReview: "4.6",
	                summary: "Roller rink",
	                description: "Clean, safe and family friendly skating!",
	                img: "https://live.staticflickr.com/1592/24561854099_b91c9f424f_b.jpg",
			website: "",
			weather: "",
	                },
	              {
					destination:"Altitude Trampoline Park",
					outdoor: false,
	                rank: "49",
	                googleReview: "4.6",
	                summary: "Indoor Trampoline Park",
	                description: "14,000 square feet of indoor activities including a m trampoline court, kids court, foam pit, performance trampolines, dodgeball court, basketball dunking lanes, trapeze bar, tumble track, battle beam!",
	                img: "https://51ncfmh5mo-flywheel.netdna-ssl.com/wp-content/uploads/2018/12/NinjaCourse.png",
			website: "http://www.altitudegr.com/",
			weather: "",
	                },
	              {
					destination:"Jester's Court",
					outdoor: true,
	                rank: "50",
	                googleReview: "4.6",
	                summary: "Inflatables & Jungle Gym Place Center",
	                description: "West Michigan's largest indoor child entertainment center.",
	                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEQg28gMd5Q_-jn-n3V9LBLZYSfRhea8wpN0krDfcozJQJfOGr",
			website: "http://jesterscourt.com/",
			weather: "",
					},

];
  
  
  


  
  
var scaling = 1.50;
// count
var currentSliderCount = 0;
// var videoCount = $(".slider-container").children().length;
var videoCount = 1300;
// var videoCount = $(".slider-container").children().length;
var showCount = 4;
var sliderCount = videoCount / showCount;
var controlsWidth = 40;
var scollWidth = 0;
var videoWidth = 0;
var videoHeight = 0;
var videoWidthDiff = 0;
var videoHeightDiff = 0;
    
// alert("videoCount: "+videoCount);


  $(document).ready(function(){ 
  // $('.slider-container .slide:nth-last-child(-n+4)').prependTo('.slider-container'); 
	initSlider();
  });
 
$( window ).resize(function() {
    initSlider();
});
function initSlider(){
    // elements
    var win = $(window);
    var sliderFrame = $(".slider-frame");
    var sliderContainer = $(".slider-container");
    var slide = $(".slide");
    
    // counts
    var scollWidth = 0;
 
    
    // sizes
    var windowWidth = win.width();
    var frameWidth = win.width() - 80;
     if(windowWidth >= 0 && windowWidth <= 430){
       showCount = 2;
   }else if(windowWidth >= 430 &&  windowWidth <= 768){
       showCount = 3;
   }else if(windowWidth >= 769 &&  windowWidth <= 992){
	   showCount = 4;
   }
   
    videoWidth = ((windowWidth - controlsWidth * 2) / showCount );
    videoHeight = Math.round(videoWidth / (16/9));
    
    // console.log("videoWidth: "+videoWidth);
    
    videoWidthDiff = (videoWidth * scaling) - videoWidth;
    videoHeightDiff = (videoHeight * scaling) - videoHeight;
    
    // console.log("windowWidth: "+windowWidth);
  
    
    // set sizes
    sliderFrame.width(windowWidth);
    sliderFrame.height(videoHeight * scaling);
    
    
    // sliderFrame.css("top", (videoHeightDiff / 2));
    
    sliderContainer.height(videoHeight * scaling);
    // sliderContainer.width((videoWidth * videoCount) + videoWidthDiff);
    sliderContainer.width(80000);
    // console.log("sliderContainer: width: "+sliderContainer.width());
   // sliderContainer.width(4160);
    
    sliderContainer.css("top", (videoHeightDiff / 2));
    sliderContainer.css("margin-left", (controlsWidth));
    
    slide.height(videoHeight);
    slide.width(videoWidth);
    $(".slide").css("margin", 2);
    // hover effect
    $(".slide").mouseover(function() {
    	
    	 
    	
        $(this).css("width", videoWidth * scaling);
        $(this).css("height", videoHeight * scaling);
        $(this).css("top", -(videoHeightDiff / 2));
		$(this).css("margin", 2);
		var current_id = $(this).parent().attr('id');
		 
		$("#"+current_id).width($("#"+current_id).width()+250);
		
		// console.log("current_id: "+current_id);
		// console.log("indexxx: "+$("#"+current_id+" >
		// .slide").index($(this)));
        if($("#"+current_id+" > .slide").index($(this)) == 0 || ($("#"+current_id+" > .slide").index($(this)))% 4 == 0){
          // do nothing
        }
        else if(($("#"+current_id+" > .slide").index($(this)) + 1) % 4 == 0 && $("#"+current_id+" > .slide").index($(this)) != 0){
            $(this).parent().css("margin-left", -(videoWidthDiff - controlsWidth));
        }
        else{
            $(this).parent().css("margin-left", - (videoWidthDiff / 2));
        }
    }).mouseout(function() {
        $(this).css("width", videoWidth * 1);
        $(this).css("height", videoHeight * 1);
		$(this).css("margin", 2);
        $(this).css("top", 0);
        $(this).parent().css("margin-left", controlsWidth);
    });
    
    // controls
    // console.log("in controlls: frameWidth: "+frameWidth);
    // console.log("in controlls: scollWidth: "+scollWidth);
    controls(frameWidth, scollWidth);
}
function controls(frameWidth, scollWidth){
    var prev = $(".prev");
    var next = $(".next");
    
    prev.on("click", function(){
		// console.dir($(this));
        // console.log("currentSliderCount: "+currentSliderCount);
        // console.log("sliderCount: "+sliderCount);
		// console.log("frameWidth: "+frameWidth);
		
		
		
		
		
		var CurrentslideContantner = $(this).next().next().attr("id");
        // console.log("slide-contentner: "+ CurrentslideContantner );
        
        var currentSlideElements =  $("#"+CurrentslideContantner).children().length;
        // console.log("currentSlideElements ---- : "+currentSlideElements);
        var currentSliderWidth = $("#"+CurrentslideContantner);
       
        
        $("#"+CurrentslideContantner).width((videoWidth * currentSlideElements) + videoWidthDiff);
         // console.log("after width changed: "+currentSliderWidth.width());
		
     
         scollWidth = scollWidth + frameWidth;
 		// console.log("scollWidth: aftr: "+scollWidth);
 		
 		if(scollWidth >= currentSliderWidth.width() || scollWidth <=0 || currentSlideElements == 4){
 			scollWidth = 0;
 		}
 		
 		
          
         
		if(currentSliderCount <0){
			currentSliderCount = 0;
		}
		
		$("#"+CurrentslideContantner).animate({
            left: - scollWidth
        }, 10, function(){ 
            // console.log("currentSliderCount: "+currentSliderCount +" And
			// sliderCount: "+sliderCount);
			if(currentSliderCount >= sliderCount-1){
			
				$("#"+CurrentslideContantner).css("left", 0);
                currentSliderCount = 0;
                scollWidth = 0;
            }else{
                currentSliderCount++;
            }
        });        
    });
    next.on("click", function(){
    	
        
    	scollWidth = scollWidth - frameWidth;
		 console.log("scollWidth: b4: "+scollWidth);
		 var CurrentslideContantner = $(this).next().attr("id");
		 
		 // console.log("CurrentslideContantner: "+CurrentslideContantner);
		 
		 var currentSlideElements =  $("#"+CurrentslideContantner).children().length;
	         console.log("currentSlideElements ---- : "+currentSlideElements);
	     var currentSliderWidth = $("#"+CurrentslideContantner);
		 
		 $("#"+CurrentslideContantner).width((videoWidth * currentSlideElements) + videoWidthDiff);
          console.log("after width changed: "+currentSliderWidth.width());
         
         if(Math.abs(scollWidth) >= currentSliderWidth.width() || currentSlideElements == 4){
  			scollWidth = 0;
  		}
         
          console.log("scollWidth: after: "+scollWidth);
          console.log("currentSliderCount: : "+currentSliderCount);
         
         if(Math.abs(currentSliderCount) ==2 && currentSlideElements >8){
        	 scollWidth = scollWidth-1278;
         }
         if(Math.abs(currentSliderCount) ==3 && currentSlideElements >8){
  			 //console.log("inside if");
  			scollWidth = 0;
 		}
		 
		 
        $('#'+CurrentslideContantner).animate({
            left: + scollWidth
        }, 10, function(){ 
			// console.log("currentSliderCount:B4 "+currentSliderCount);
			 //console.log("sliderCount: "+sliderCount);
        
			  //console.log("currentSliderCount: "+currentSliderCount +" And sliderCount: "+sliderCount);
			if(Math.abs(currentSliderCount) >= sliderCount-1){
			
				$('#'+CurrentslideContantner).css("left", 0);
                currentSliderCount = 0;
                scollWidth = 0;
				
                
            }else{
                
				currentSliderCount--;
            }
			
        });
		 
       // $("#trending-items").css("left", scollWidth);
    });
};
 
  
  

      
	  }
	  

  
  angular.module('WeatherEventApp')
    .component('grEvents', {
      template: `
  
<div id="gr-events">
<div class="slider-frame">

			<div class="button prev">
				<i class="fa fa-chevron-left" aria-hidden="true"></i>
			</div>
			<div class="button next">
				<i class="fa fa-chevron-right" aria-hidden="true"></i>
			</div>


			<div class="slider-container" id="top-search" >

				
					<div ng-repeat="item in $ctrl.grEvents"class="slide">
						<a href="{{item.website}}" target="_blank">
							<img class="slider-img" ng-src="{{item.img}}" alt="{{item.destination}}">
							<p class="bottom-destination">{{item.destination}}</p>
							<p class="bottom-summary">{{item.summary}}</p>			
						</a>	
					</div>
			</div>
</div>


</div>
  
  `, // or use templateUrl
	  controller: GrEvents,
	//   bindings: {
	// 	grEvents: "&"
	//   }
  
  
    });
  
  
  
  
