import React from 'react'
import Style from "./featerInfo.module.css"
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';

function FeaterInfo() {
  return (
    <div className={Style.Containor}>
    
      <div className={Style.Feater}>
<span className={Style.featerTitle}>Revenu</span>
<div className={Style.FeaterItemContainor}>
<span className={Style.FeaterMoney} > $ 430  </span>
<span className={Style.FeaterPrie}><ArrowDownwardOutlinedIcon className={`${Style.FeterIcon$} ${Style.negative}`}/></span>
</div>
<span className={Style.FeaterSub}>Comapere to Last month</span>
</div>

<div className={Style.Feater}>
<span className={Style.featerTitle}>Revenu</span>
<div className={Style.FeaterItemContainor}>
<span className={Style.FeaterMoney} > $ 430  </span>
<span className={Style.FeaterPrie}><ArrowUpwardOutlinedIcon className={Style.FeterIcon}/></span>
</div>
<span className={Style.FeaterSub}>Comapere to Last month</span>
</div>

<div className={Style.Feater}>
<span className={Style.featerTitle}>Revenu</span>
<div className={Style.FeaterItemContainor}>
<span className={Style.FeaterMoney} > $ 430  </span>
<span className={Style.FeaterPrie}><ArrowDownwardOutlinedIcon className={`${Style.FeterIcon}`}/></span>
</div>
<span className={Style.FeaterSub}>Comapere to Last month</span>
</div>



    </div>
  )
}

export default FeaterInfo
