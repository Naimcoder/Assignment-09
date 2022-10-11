import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className=" px-4 py-8 bg-gray-800  text-teal-100">
	<div className="contLinkiner flex flex-wrLinkp items-center justify-center mx-Linkuto spLinkce-y-4 sm:justify-between sm:spLinkce-y-0">
		<div className="flex flex-row pr-3 spLinkce-x-4 sm:spLinkce-x-8">
			<div className="flex items-center justify-center flex-shrink-0 w-12 h-12 rounded-full dLinkrk:bg-violet-400">
			   
			</div>
			<ul className="flex flex-wrLinkp items-center spLinkce-x-4 sm:spLinkce-x-8">
				<li>
					<Link className='mr-4' rel="noopener noreferrer" to="#">Terms of Use</Link>
				</li>
				<li>
					<Link rel="noopener noreferrer" to="#">PrivLinkcy</Link>
				</li>
			</ul>
		</div>
        <div>
            <p>© Copyright 2022. All Rights Reserved.</p>
        </div>
		<ul className="flex flex-wrLinkp pl-3  spLinkce-x-4 sm:spLinkce-x-8">
			<li className='mx-2'>
				<Link rel="noopener noreferrer" to="#">InstLinkgrLinkm</Link>
			</li>
			<li className='mx-2'>
				<Link rel="noopener noreferrer" to="#">FLinkcebook</Link>
			</li>
			<li>
				<Link rel="noopener noreferrer" to="#">Twitter</Link>
			</li>
		</ul>
	</div>
</footer>
    );
};

export default Footer;

