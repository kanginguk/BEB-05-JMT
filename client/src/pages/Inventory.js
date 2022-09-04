import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { useRecoilValue } from "recoil"
import { accountAtom } from "../recoil/account/atom"

const Inventory = () => {
  const account = useRecoilValue(accountAtom)
  const navigate = useNavigate();

  useEffect(() => {
    if (!account.address) {
      navigate('/login');
    }
  }, []);

	return (
		<div className='inventory-container'>
			인벤토리
		</div>
	);
}

export default Inventory;