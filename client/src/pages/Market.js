import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { useRecoilValue, useSetRecoilState } from "recoil"
import { backgroundAtom } from "../recoil/background/atom"
import { accountAtom } from "../recoil/account/atom"
import './styles/Market.css'

const Market = () => {
  const account = useRecoilValue(accountAtom)
  const setBackground = useSetRecoilState(backgroundAtom)
  const navigate = useNavigate();

  useEffect(() => {
    if (!account.address) {
      navigate('/login');
    }
    setBackground({type: 'market'});
  }, []);

	return (
		<div className='market-container'>
      <Link to="/lootbox" className="lootbox-btn">뽑기</Link>
		</div>
	);
}

export default Market;