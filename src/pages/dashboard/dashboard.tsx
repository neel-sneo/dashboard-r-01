import './dashboard.css'
import ChartComponent from '../../components/chart/chart';
import Counter from '../../components/counter/counter';
import CounterDecimal from '../../components/counter/counterDecimal';
import { motion } from "framer-motion";

import { useLayoutEffect, useRef, useState } from 'react';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitText from "gsap/SplitText";
import "bootstrap-icons/font/bootstrap-icons.css";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis
} from "recharts";

const data = [
  { name: "USA", value: 82, dark: false },
  { name: "Canada", value: 62, dark: false },
  { name: "UK", value: 71, dark: false },
  { name: "Australia", value: 18, dark: true }
];
gsap.registerPlugin(useGSAP); // register any plugins, including the useGSAP hook



const Dashboard: React.FC = () => {

  const [currentOptionSelected, setCurrentOptionSelected] = useState("SE")
    const [cColor, setCColor] = useState('linear-gradient(120deg, #6cc1ff, #5b7cff)')
  const container = useRef<HTMLDivElement | null>(null); 
  useLayoutEffect(() => {
    
    let ctx = gsap.context(() => {
      let split = SplitText.create(".dashboardTextSecurity, .DashboardText ", { type: "chars" });

      gsap.fromTo(split.chars, {
        opacity: 0,
        // x: 100,
        // rotate:360,
        ease: "back",
        // duration: 5,
         scale:2,
      },{
         opacity: 1,
        // x: 0,
        rotate:0,
        ease: "back",
        scale:1,
        // duration: 1,
        stagger:0.08,
        // delay: 0.5,
      });
      
      return () => split.revert(); 
      
    },  { scope: container }); 
    
    return () => ctx.revert();
  }, []);

  const CustomYAxisTick = (data:any) => {
    const { x, y, payload } = data;
    return (
      <g transform={`translate(${x},${y})`} style={{border: '2px solid black'}}>
        <text x={-10} y={0} dy={5} textAnchor="end" fill="#242323ff" fontWeight='600' fontSize='12px'>
          {payload.value}
        </text>
      </g>
    );
  };

   const handleClick = (data:any) => {
      console.log('Button clicked!', data);
      setCurrentOptionSelected(data);
      switch (data) {
        case 'SE':
          setCColor('linear-gradient(260deg, #6cc1ff, #5b7cff)');
          break;
        case 'BB':
          setCColor('linear-gradient(260deg, #02AAB0, #00CDAC)');
          break;
          
        case 'FE':
          setCColor('linear-gradient(260deg, #ff8bb1, #ff6f6f)');
          break;

        case 'DS':
          setCColor('linear-gradient(260deg, #7b7bff, #a77aff)')
          break;

        case 'VS':
          setCColor('linear-gradient(260deg, #ffcb6b, #ff9f40)')
          break;

        case 'SS':
          setCColor('linear-gradient(160deg, #603813, #b29f94)')
          break;

        case 'QU':
          setCColor('linear-gradient(260deg, #4ed19d, #19be7a)')
        break;
        default:
          setCColor('linear-gradient(260deg, #6cc1ff, #5b7cff)');
          break;
      }
    };
  
  return (
    <div ref={container} style={{ height: '100vh', width: '100wh', display: 'flex', flexDirection: 'row', justifyContent: 'center', flex:1 }}>
      <div style={{ flex: 0.22, display: 'flex', justifyContent: 'center', backgroundImage: cColor}} >

      </div>

      <div style={{ flex: 1, display: 'flex', justifyContent: 'center', backgroundColor: 'rgba(243, 243, 243, 1)' }}>

        <div style={{ flex: 0.55, display: 'flex', flexDirection: 'column', }}>
          <div style={{ flex: 1, display: 'flex', padding: '10px' }}>
            <motion.div
              initial={{ y: 14, opacity: 0, filter: "blur(4px)"}}
              animate={{ y: 0,
              opacity: 1,
              filter: "blur(0px)",
              transition: { duration: 0.5, ease: [0.2, 0.8, 0.2, 1] },}}
              style={{ display: 'flex', flexDirection:'column', flex: 1, backgroundColor: 'rgba(243, 243, 243, 1)' }}
              
            >
              <div className="dashboardText" style={{ display:'flex',flexDirection:'row', justifyContent:'flex-end',backgroundColor: 'rgba(243, 243, 243, 1)'}}>
                <div className="innerDashboardText" style={{ marginTop:'10px',  zIndex:'1',height:'9vh', width:'14vw',  backgroundColor: 'rgba(255, 255, 255, 1)',  borderRadius:'20px'}}>
                  <p className='DashboardText' style={{ fontWeight:'bold', display:'flex',  padding:'20px', fontSize:'20px'}}>Dashboard</p>

                </div>
                <div className="notificationText" style={{display:'flex', flexDirection:'row', margin:'10px', justifyContent:'center', alignItems:'center', height:'6vh', width:'10vw', borderRadius:'20px', backgroundColor: 'rgba(255, 255, 255, 1)'}}>
                  <div className="notificationIconParent" style={{ display:'flex', justifyContent:'center' ,width:'3vw',padding:'8px',  background: 'linear-gradient(160deg, #7b7bff, #a77aff)', borderRadius:'50px' }}>
                    <i className="bi bi-bell" style={{color: 'rgba(255, 255, 255, 1)'}}></i>
                  </div>
                  <p className={'textPDashboar'} style={{ display:'flex', textAlign:'center', marginTop:'15px', marginLeft:'5px', fontSize:'12px', fontWeight:'500'}}>Neel</p>
                </div>
              </div>

              
               <div className="menuItems" style={{  marginTop:'-15px', display:'flex', flex:1,backgroundColor: 'rgba(243, 243, 243, 1)', borderBottomRightRadius:'15px'}}>
                  <div className="menuItemsLeft" style={{flex:0.3,paddingTop:'8vh'}}>
                  
                     <div className="pill-nav" style={{ display:'flex', height:'100%', flexDirection:'column',  alignItems:'center',justifyContent:'space-evenly' }}>

                      <button
                          className="liIcons"
                          style={{
                            background: `linear-gradient(160deg, #6cc1ff, #5a78ff`,
                            boxShadow: `0 8px 18px #5a78ff33`
                          }}
                          onClick={ ()=> handleClick('SE')}
                        >
                          Se
                        </button>
                        <button
                          className="liIcons"
                          style={{
                            background: `linear-gradient(160deg, #ff8bb1, #ff6f6f)`,
                            boxShadow: `0 8px 18px #ff6f6f33`
                          }}
                          onClick={ ()=> handleClick('FE')}

                        >
                          Fe
                        </button>
                        <button
                          className="liIcons"
                          style={{
                            background: `linear-gradient(160deg, #7b7bff, #a77aff)`,
                            boxShadow: `0 8px 18px #a77aff33`
                          }}
                          onClick={ ()=> handleClick('DS')}
                        >
                          Ds
                        </button>
                        <button
                          className="liIcons"
                          style={{
                            background: `linear-gradient(160deg, #ffcb6b, #ff9f40)`,
                            boxShadow: `0 8px 18px #ff9f4033`
                          }}
                          onClick={ ()=> handleClick('VS')}
                        >
                          Vs
                        </button>
                        <button
                          className="liIcons"
                          style={{
                            background: `linear-gradient(160deg, #4ed19d, #19be7a)`,
                            boxShadow: `0 8px 18px #19be7a33`
                          }}
                          onClick={ ()=> handleClick('QU')}
                        >
                          Qu
                        </button>
                      
                    </div>
                  </div>
                  <div className="menuItemsRight" style={{borderRadius:'20px', display:'flex', justifyContent:'center', flex:1,backgroundColor: 'rgba(255, 255, 255, 1)' }}>
                    <div style={{ listStyleType: 'none', margin: '0px', padding: '0px', marginTop:'15px' }}>
                      <button className={currentOptionSelected === 'SE'? 'buttonText1': 'buttonText'}
                        onClick={ ()=> handleClick('SE')}
                      >
                         <i className="bi bi-camera-video" ></i>
                       
                        <p className='iconMenu'>Security</p>
                        <div className={currentOptionSelected === 'SE'? 'menu-chip': 'menu-chip-inactive'}>3</div>
                        <i className="bi bi-arrow-right" style={{color:'white', paddingLeft:'10px'}}></i>
                      </button>

                      <button className={currentOptionSelected === 'BB'? 'buttonText2': 'buttonText'}
                        onClick={ ()=> handleClick('BB')}
                      >
                        <i className="bi bi-bug"></i>
                         <p className='iconMenu'>Bug Box</p>
                      </button>
                      <button className={currentOptionSelected === 'FE'? 'buttonText3': 'buttonText'}
                        onClick={ ()=> handleClick('FE')}
                      >
                        <i className="bi bi-tropical-storm"></i>
                        <p className='iconMenu'>Fishing Tracking</p>
                      </button>
                      <button className={currentOptionSelected === 'DS'? 'buttonText4': 'buttonText'}
                        onClick={ ()=> handleClick('DS')}
                      >
                        <i className="bi bi-grid"></i>
                        <p className='iconMenu'>Deep State</p>
                      </button>
                      <button className={currentOptionSelected === 'VS'? 'buttonText5': 'buttonText'}
                        onClick={ ()=> handleClick('VS')}
                      >
                        <i className="bi bi-bookmark"></i>
                        <p className='iconMenu'>Booked</p>
                      </button>
                      <button className={currentOptionSelected === 'SS'? 'buttonText6': 'buttonText'}
                        onClick={ ()=> handleClick('SS')}
                      >
                        <i className="bi bi-gear"></i>
                        
                         <p className='iconMenu'>Settings</p>
                      </button>
                      <button className={currentOptionSelected === 'QU'? 'buttonText7': 'buttonText'}
                        onClick={ ()=> handleClick('QU')}
                      >
                        <i className="bi bi-chat"></i>
                        <p className='iconMenu'>Support</p>
                      </button>

                    </div>
                  </div>
                </div>
              
            </motion.div>


          </div>

          <div style={{ flex: 0.35, display: 'flex', justifyContent: 'center',padding: '10px' }}>
            <motion.div
              initial={{ y: 14, opacity: 0, filter: "blur(4px)"}}
              animate={{ y: 0,
              opacity: 1,
              filter: "blur(0px)",
              transition: { duration: 0.5, ease: [0.2, 0.8, 0.2, 1] },}}
              style={{display:'flex', flex:1}}
            >
              <div style={{display:'flex', flex:1,  }}>
                <div style={{display:'flex', flexDirection:'column', flex:0.3, justifyContent:'space-between', alignItems:'center'}}>
                    <button className="circle-ghost light">
                      <i className="bi bi-plus-lg" style={{fontSize:'20px', color:'#1c1919ff'}}></i>
                    </button>
                     <button className="circle-ghost light">
                      <i className="bi bi-arrow-counterclockwise"  style={{fontSize:'20px', color:'#1c1919ff'}}></i>
                    </button>
                     <button className="circle-ghost light">
                      <i className="bi bi-chat"  style={{fontSize:'20px', color:'#1c1919ff'}}></i>
                    </button>
                     <button className="circle-ghost light">
                      <i className="bi bi-reply"  style={{fontSize:'20px', color:'#1c1919ff'}}></i>
                    </button>
                </div>

                <div  className="card2" style={{display:'flex', flex:1,}} >
                  <div className="pro-card">
                    <div style={{display:'flex', flex:1, justifyContent:'space-between', padding:'15px 15px', }}>
                      <button className="circle-ghost">
                        <i className="bi bi-chevron-left" style={{fontSize:'18px'}}></i>
                      </button>
                      <button className="circle-ghost">
                        <i className="bi bi-clock-history"></i>
                      </button>
                    </div>

                    <div style={{display:'flex', flex:1, padding:'15px 15px',  }}>
                      <div style={{display:'flex', flex:1,}}>
                        <div className="pro-title">Get<br/><div className="pro-plus">+Pro</div></div>
                        
                      </div>
                     

                      <div style={{display:'flex', gap:'6px', flex:1,  justifyContent:'center', alignItems:'flex-end',}}>
                        <span  style={{ width:'6px', height:'6px', borderRadius:'50%', background:'rgba(255,255,255,.55)'}}></span>
                        <span style={{ width:'6px', height:'6px', borderRadius:'50%', background:'rgba(255, 255, 255, 1)'}}></span>
                        <span style={{ width:'6px', height:'6px', borderRadius:'50%', background:'rgba(255,255,255,.55)'}}></span>
                        <span style={{ width:'6px', height:'6px', borderRadius:'50%', background:'rgba(255,255,255,.55)'}}></span>
                      </div>

                      <div  style={{display:'flex', flex:1, justifyContent:'flex-end', alignItems:'flex-end'}}>
                         <button className="circle-ghost">
                        <i className="bi bi-play-circle"></i>
                      </button>
                      </div>
                    </div>

                    <div className="pro-bg" />
                  </div>
                  </div>
              </div>

              
            </motion.div>
          </div>
        </div>

        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', }}>

          <div style={{ flex: 0.25, display: 'flex',flexDirection: 'column', }}>
            <div style={{ flex: 0.25, display: 'flex',flexDirection: 'row', }}>
              <div style={{ flex: 1, display: 'flex', flexDirection:'column', justifyContent:'center', paddingTop:'4vh', paddingLeft:'1vw'}}>
                <p className='dashboardTextSecurity' style={{ fontSize:'28px', fontWeight:'500' , color:'#181919ff',lineHeight:'28px'}}>Security Dashboard</p>
                <p style={{fontSize:'14px', fontWeight:'500' , color:'#7b7b7bff', lineHeight:'2px'}}>You have 2 new unread notification</p>
              </div>
              <div style={{ flex: 0.1, display: 'flex', justifyContent:'center', alignItems:'center',  }}>
                <button style={{ flex:1,display:'flex', justifyContent:'center', alignItems:'center', background: 'linear-gradient(160deg, #4e4edfff, #a77aff)', borderRadius:'999px', height:'6vh', width:'5vh' ,border: '0px solid black', marginRight:'15px'}}>
                  <i className="bi bi-arrows-fullscreen" style={{color:'white'}}></i>
                </button>
              
              </div>
            </div>
            
            <div style={{ flex: 1, display: 'flex',}}>

              <div style={{ flex: 1, display: 'flex', padding: '10px' }}>
              <motion.div
                initial={{ y: 14, opacity: 0, filter: "blur(4px)"}}
                animate={{ y: 0,
                opacity: 1,
                filter: "blur(0px)",
                transition: { duration: 0.5, ease: [0.2, 0.8, 0.2, 1] },}}
                className="card2"
                style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'baseline' }}
              >
                <div style={{display:'flex', flex:1, flexDirection:'column', padding:'15px' }}>
                  <div style={{display:'flex', width:'100%', justifyContent:'space-between', }}>
                    <p style={{fontSize:'20px', fontWeight:'500', lineHeight:'10px',  marginTop:'8px'}}>This month</p>
                    <div style={{display:'flex', flexDirection:'row', background: 'linear-gradient(200deg, #4e4edfff, #a77aff)', width:'4vw', height:'2.5vh', justifyContent:'center', borderRadius:'200px', marginTop:'5px' }}>
                      <i className="bi bi-arrow-up-right" style={{ color:'white', fontSize:'8px', paddingTop:'3px', paddingRight:'5px' }}></i>
                      <p style={{fontSize:'12px', color:'white',textAlign:'center'}}>18%</p>
                    </div>
                    <div style={{cursor:'pointer'}} >
                      <i className="bi bi-justify-right" style={{fontSize:'20px'}}></i>
                    </div>

                  </div>
                  <div style={{display:'flex', width:'100%',justifyContent:'space-between' }}>
                    <div style={{ display:'flex', flex:0.3,}}>
                      <div style={{ padding:'10px, 20px', display:'flex', background:'#3d3d3eff', borderRadius:'999px', height:'7vh', width:'4vw', justifyContent:'center', alignItems:'center' }}>
                        <i className="bi bi-gear" style={{color:'white', fontSize:'28px',}}></i>
                      </div>
                    </div>

                    <div style={{display:'flex', flexDirection:'row', alignItems:'center', flex:0.3, justifyContent:'center',paddingLeft:'10px', paddingRight:'12px'}}>
                      <Counter className="card-coundown" value={139} />
                      <p className='card-coundown-total'> /172h</p>
                    </div>

                    <div style={{display:'flex', flexDirection:'row', alignItems:'baseline', flex:1, paddingTop:'18px', lineHeight:'5px'}}>
                      <p style={{fontSize:'12px', fontWeight:'500', lineHeight:'10px',  marginTop:'8px'}}>Recomandation for <br/>enhancing data encryption</p>
                    </div>
                  
                  </div>
                  
                </div>
               
              </motion.div>
            </div>
            <div style={{ flex: 0.7, display: 'flex', justifyContent: 'center',  padding: '10px' }}>
              <motion.div
                initial={{ y: 14, opacity: 0, filter: "blur(4px)"}}
                animate={{ y: 0,
                opacity: 1,
                filter: "blur(0px)",
                transition: { duration: 0.5, ease: [0.2, 0.8, 0.2, 1] },}}
                className="card2"
              >

                <div style={{display:'flex', flex:1, flexDirection:'column', padding:'15px' }}>
                  <div style={{display:'flex', width:'100%', justifyContent:'space-between', }}>
                    <p style={{fontSize:'20px', fontWeight:'500', lineHeight:'10px',  marginTop:'8px'}}>Fishing track</p>
                  </div>

                  <div style={{display:'flex', width:'100%',justifyContent:'space-between' }}>
                    <div style={{ display:'flex', flex:0.3,}}>
                      <div style={{ padding:'10px, 20px', display:'flex', background:'#3d3d3eff', borderRadius:'999px', height:'7vh', width:'4vw', justifyContent:'center', alignItems:'center' }}>
                        <i className="bi bi-database" style={{color:'white', fontSize:'28px',}}></i>
                      </div>
                    </div>

                    <div style={{display:'flex', flexDirection:'row', alignItems:'center', flex:0.3, justifyContent:'center',paddingLeft:'10px', paddingRight:'12px'}}>
                      <Counter className="card-coundown" value={437} />
                      <p className='card-coundown-total'> /1200</p>
                    </div>

                   
                  
                  </div>
                  
                </div>

              </motion.div>
            </div>

            </div>
            
          </div>

          <div style={{ flex: 1, display: 'flex', }}>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', }}>
              <div style={{ flex: 1, display: 'flex', padding: '10px' }}>
                <motion.div
                  initial={{ y: 14, opacity: 0, filter: "blur(4px)"}}
                  animate={{ y: 0,
                  opacity: 1,
                  filter: "blur(0px)",
                  transition: { duration: 0.5, ease: [0.2, 0.8, 0.2, 1] },}}
                  className="card2"
                >
                  <div style={{display:'flex', flex:1, flexDirection:'column', padding:'15px 20px' }}>
                    <div style={{display:'flex'}}>
                      <div style={{display:'flex', flex:1, justifyContent:'center'}}>
                        <div style={{ padding:'10px 20px', display:'flex',background: 'linear-gradient(200deg, #4e4edfff, #a77aff)', borderRadius:'999px', height:'5vh', width:'2.8vw', justifyContent:'center', alignItems:'center', cursor:'pointer' }}>
                        <i className="bi bi-pin-angle" style={{color:'white', fontSize:'20px',}}></i>
                      </div>
                      </div>

                      <div style={{display:'flex', flex:1,  justifyContent:'flex-end'}}>
                        <div style={{ display:'flex', flexDirection:'row', padding:'8px 8px', background:'#f6f5f5ff',  borderRadius:'999px', height:'5vh', width:'5.5vw', justifyContent:'space-between', alignContent:'center'}}>
                          <div style={{background:'white',borderRadius:'999px', width:'1.8vw', display:'flex', justifyContent:'center', alignItems:'center', cursor:'pointer'}}>
                          <i className="bi bi-brightness-low" style={{fontSize:'20px', }}></i>
                          </div>
                          <div style={{ borderRadius:'999px', width:'1.8vw', display:'flex', justifyContent:'center', alignItems:'center', cursor:'pointer' }}>
                          <i className="bi bi-brightness-high" style={{fontSize:'20px',}}></i>
                          </div>
                        </div>
                      </div>
                      
                    </div>

                    <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginTop:'3vh'}}>
                      <div style={{display:'flex', flexDirection:'row', border: '1px solid #dcdbdbff', background: '#f6f5f5ff', width:'4vw', height:'2.4vh', justifyContent:'center', borderRadius:'200px', cursor:'pointer'}}>
                      <p style={{fontSize:'10px', color: '#706f69',textAlign:'center'}}>1h</p>
                    </div>
                    <div style={{display:'flex', flexDirection:'row',border: '1px solid #dcdbdbff', background: '#f6f5f5ff', width:'4vw', height:'2.4vh', justifyContent:'center', borderRadius:'200px', cursor:'pointer'}}>
                      <p style={{fontSize:'10px', color: '#706f69',textAlign:'center'}}>12h</p>
                    </div>
                    <div style={{display:'flex', flexDirection:'row', border: '1px solid #4e4edfff', background:'#4e4edf30', width:'4vw', height:'2.4vh', justifyContent:'center', borderRadius:'200px', cursor:'pointer'}}>
                      <p style={{fontSize:'10px', color:'#4e4edfff',textAlign:'center',}}>24h</p>
                    </div>
                    <div style={{display:'flex', flexDirection:'row', border: '1px solid #dcdbdbff',background: '#f6f5f5ff', width:'4vw', height:'2.4vh', justifyContent:'center', borderRadius:'200px', cursor:'pointer'}}>
                      <p style={{fontSize:'10px',color: '#706f69',textAlign:'center'}}>Day</p>
                    </div>
                    </div>

                    <div style={{display:'flex', marginTop:'3.5vh'}}>

                      <div style={{display:'flex', flex:1,flexDirection:'row',}}>
                        <div style={{height:'2.1vh', width:'2.1vh', borderRadius:'3.5px', background:'#a77aff', marginTop:'2px', marginRight:'0.5vw'}}/>
                        <p style={{fontSize:'12px', color: '#4b4b4bff', fontWeight:'500',}}>Check Metrics</p>
                      </div>

                      <div style={{display:'flex', flex:1, justifyContent:'flex-end'}}>
                        <div style={{display:'flex', flexDirection:'row', background: 'linear-gradient(200deg, #4e4edfff, #a77aff)', width:'4vw', height:'2.5vh', justifyContent:'center', borderRadius:'200px', }}>
                          <i className="bi bi-arrow-up-right" style={{ color:'white', fontSize:'8px', paddingTop:'3px', paddingRight:'5px' }}></i>
                          <p style={{fontSize:'12px', color:'white',textAlign:'center'}}>26%</p>
                        </div>
                      </div>
                    </div>

                    <div style={{display:'flex', flexDirection:'row', paddingBottom:'2px'}}>
                      <div style={{display:'flex', flexDirection:'column',justifyContent:'flex-end', flex:1,}}>
                        <CounterDecimal className="card-coundown-decimal" value={18702.96}/>
                        <p style={{fontSize:'10px',color: '#4b4b4bff', fontWeight:'500',  marginBottom:'-1px', lineHeight:'5px'}}>Checking Totally</p>
                      </div>

                      <div style={{display:'flex', flex:0.5, justifyContent:'flex-end', alignItems:'flex-end',}}>
                        <p style={{fontSize:'10px',color: '#4b4b4bff', fontWeight:'500', marginBottom:'-1px', lineHeight:'5px'}}>+94 Today</p>

                      </div>
                    </div>
                  </div>

                </motion.div>
              </div>
              <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '10px' }}>
                <motion.div
                  initial={{ y: 14, opacity: 0, filter: "blur(4px)"}}
                  animate={{ y: 0,
                  opacity: 1,
                  filter: "blur(0px)",
                  transition: { duration: 0.5, ease: [0.2, 0.8, 0.2, 1] },}}
                  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}
                  className="card2"
                >
                  <div style={{display:'flex', flexDirection:'column', padding:'10px 0px'}}>

                    <div style={{display:'flex', justifyContent:'space-between'}}>
                      <p style={{fontSize:'24px',color: '#4b4b4bff', fontWeight:'500'}}>Deep Statics</p>
                      <i className="bi bi-reception-4" style={{fontSize:'24px', color:'#4e4edfff'}}></i>
                    </div>
                    <div style={{display:'flex', marginTop:'-10px' }}>
                      <ChartComponent />
                    </div>
                  </div>

                </motion.div>
              </div>
            </div>
            <div style={{ flex: 1.2, display: 'flex', flexDirection: 'column', }}>
              <div style={{ flex: 1, display: 'flex', padding: '10px' }}>
                <motion.div

                  initial={{ y: 14, opacity: 0, filter: "blur(4px)"}}
                  animate={{ y: 0,
                  opacity: 1,
                  filter: "blur(0px)",
                  transition: { duration: 0.5, ease: [0.2, 0.8, 0.2, 1] },}}
                  className="card2"
                >
                  <div style={{padding:'10px 20px'}}>
                    <div style={{marginBottom:'10px'}}>
                      <div className="tabs" style={{background:'#f3f4f9', width:'15vw', display:'flex', justifyContent:'center', borderRadius:'20px', padding:'3px 0px' }}>
                        <button className="tab active">Worldwide</button>
                        <button className="tab">My Country</button>
                      </div>
                    
                      <div className="bars">
                        <ResponsiveContainer width="100%" height={160}>
                          <BarChart
                            data={data}
                            layout="vertical"
                            margin={{ left: 20, right: 16, top: 6, bottom: 0 }}
                            barSize={12}
                          >
                            <CartesianGrid horizontal={false} vertical={false} />
                            <XAxis type="number" hide domain={[0, 100]} />
                            <YAxis
                              axisLine={false}
                              type="category"
                              dataKey="name"
                              tick={<CustomYAxisTick />}
                              width={74}
                            />
                            <Bar
                              dataKey="value"
                              radius={[8, 8, 8, 8]}
                              background={{ fill: "#f0f2f8", radius: 999 }}
                              fill="url(#barGrad)"
                            />
                            <defs>
                              <linearGradient id="barGrad" x1="0" y1="0" x2="1" y2="0">
                                <stop offset="0%" stopColor="#6c7bff" />
                                <stop offset="100%" stopColor="#a77aff" />
                              </linearGradient>
                            </defs>
                          </BarChart>
                        </ResponsiveContainer>
                      </div>
                
                      <div className="axis">
                        <span>0%</span>
                        <span>50%</span>
                        <span>100%</span>
                      </div>
                    </div>
                    <div style={{position:'absolute', left:0, right:0, height:'1px', background:'#c6c6c6ff',}}/>

                    <div style={{display:'flex', marginTop:'20px'}}>
                      <div className="track-body" style={{display:'flex', flex:1}}>
                        <ul className="legend-list">
                          <li><span className="o o1" /> <p className='percentextColor'>Ddos Attack  <p className='percentageColor'>– <b>37%</b></p></p></li>
                          <li><span className="o o2" /> <p className='percentextColor'>Phishing Attack  <p className='percentageColor'>– <b>23%</b></p></p></li>
                          <li><span className="o o3" /> <p className='percentextColor'>Uptime  <p className='percentageColor'>– <b>29%</b></p></p></li>
                          <li><span className="o o4" /> <p className='percentextColor'>Encryption  <p className='percentageColor'>– <b>21%</b></p></p></li>
                        </ul>
                      </div>

                      <div style={{ width:'1px', background:'#c6c6c6ff',}}/>

                      <div style={{display:'flex', flex:1, flexDirection:'column'}}>
                        <div style={{display:'flex', flexDirection:'row', justifyContent:'flex-start', alignItems:'center',}}>
                          <i className="bi bi-arrow-down-circle" style={{fontSize:'20px', color:"#b1b1b1ff", paddingLeft:'15px', paddingRight:'5px'}}></i>
                          <i className="bi bi-arrow-up-circle" style={{fontSize:'20px', color:"#514f4fff"}}></i>
                        </div>

                         <div style={{display:'flex', flexDirection:'row',alignItems:'center', flex:1, justifyContent:'center',paddingLeft:'10px', paddingRight:'12px'}}>
                          <Counter className="card-coundown" value={159} />
                          <p className='card-coundown-total'> /260</p>
                        </div>
                      </div>


                     
                    </div>
                </div>
                </motion.div>
              </div>
              <div style={{ flex: 0.4, display: 'flex', paddingLeft:'15px' }}>
                <motion.div
                 initial={{ y: 14, opacity: 0, filter: "blur(4px)"}}
                  animate={{ y: 0,
                  opacity: 1,
                  filter: "blur(0px)",
                  transition: { duration: 0.5, ease: [0.2, 0.8, 0.2, 1] },}}
                >

                  <div style={{fontSize:'20px', lineHeight:'26px'}}>
                    Tracking<br />Firewall Fox
                  </div>

                   <div className="track-tags">
                    <span className="tag purple">Tracker</span>
                    <span className="tag gray">95 Firewall</span>
                    <span className="tag gray">Unauthorized</span>
                  </div>

                </motion.div>
              </div>
            </div>
          </div>



        </div>

      </div>
    </div>
  )
}

export default Dashboard;