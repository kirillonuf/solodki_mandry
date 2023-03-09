import React from 'react';
import { Link } from "react-router-dom";
import './header.scss';
const Header = () => {

	return (
		<div className='header'>
			<div className='logo'>
				<Link to={"/"}><svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 127 147" width="100" height="100">
					<defs>
						<clipPath clipPathUnits="userSpaceOnUse" id="cp1">
							<path d="m-316-912h1684v1191h-1684z" />
						</clipPath>
						<image width="128" height="422" id="img1" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAAGmCAMAAACDYnxmAAAAAXNSR0IB2cksfwAAAQJQTFRFZyoIZyoIZyoIZyoIZyoIZyoIZyoIZyoIZyoIZyoIZyoIZyoIZyoIZyoIZyoIZyoIZyoIZyoIZyoIZyoIZyoIZyoIZyoIZyoIZyoIZyoIZyoIZyoIZyoIZyoIZyoIZyoIZyoIZyoIZyoIZyoIZyoIZyoIZyoIZyoIZyoIZyoIZyoIZyoIZyoIZyoIZyoIZyoIZyoIZyoIZyoIZyoIZyoIZyoIZyoIZyoIZyoIZyoIZyoIZyoIZyoIZyoIZyoIZyoIZyoIZyoIZyoIZyoIZyoIZyoIZyoIZyoIZyoIZyoIZyoIZyoIZyoIZyoIZyoIZyoIZyoIZyoIZyoIZyoIZyoIZyoIL8b51wAAAFZ0Uk5TAEKMlcpb/4A7sdFYCqQnR7YMS4HFaE8q87+qFnXfQ9TGTYrqVT2ioRosuFwmh4kfGEbvGa9ATLJjc8ydHMntjihe5Q5KKdybM8vetAfBeOFmu5foUiUMhIsIAAABr0lEQVR4nO3aWU/UYBQG4M/tVEYUUBFGFEdFVER0GAVxXxF3cfn/f8WWgcRwY0jGHk2e56bnoun7ZjLfzWlLAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP5rhw4nFzhyNDf/WESVGH98LGqdE2kFxqumwMlTaQVqEROZ8aVUk7n5Zer0yB95ZuRPPJiJTnKBszGdkHpuZm+qD9ZsQoHu+amd69yF5mBfnG85fvpSRO9yPVy5GkO9hVYLXFuMuH6jHm5Ww/ylW8utFihl8vbuMNPkr7ScXrtzd2/qR3Tbz/9dtdr2z7/P4F5ufin3swsAAADQnrWZP9/zV60/yM3fiIe5BSJiMTF+YWcb9ehxUvzGk9193NNnOQWev1gaFqjy9iErTX7qQexG9DPzy/LLzPddjSr5bU8ZvMpMf/0mM722+TY1fqs+AuuZK9GmwLvcnez7D3Op+aWf/ScEAADgn9P2J4T7ffyUXOBzjP7z3AOJ+JKYPv612ZpurmXlz28P98azvawGZatT538bpOXXvsd2ZnwpP1Z/5hYoY8n5mX4BXVkXKKnS+EwAAAAASUVORK5CYII=" />
					</defs>

					<g id="Clip-Path" clipPath="url(#cp1)">
						<g id="Layer">
							<use id="Layer" href="#img1" x="0" y="-319" />

							<path id="Layer" fillRule="evenodd" className="s0" d="m60.1 109.3c7-11.5 13.3-22.5 18.5-33.3l-8 25.6q-3.7 2.9-7.5 5.7c-0.6 0.5-2.2 1.7-3 2zm-11.5-11.2c-8.9-17.5-18.4-43.6-23.3-62.3-2.4-9.3 0.4-30.7 13.6-19.8 1.2-3.7 4-6 8.7-6.7 5.9-0.8 9.3 3.3 9.5 9.1l-1.5 90.4c-2.9-3.1-5.1-6.9-7-10.7zm9.1 10.6l3.9-74.7c0.4-8.4-0.9-18.5 6.9-20.6 9.6-2.5 10.4 1.8 10.6 9.7 0.6-3.3 1.7-5.4 3.2-6.2 5.5-3.1 9.1 9.6 7.4 15.2-0.4 1.4-0.9 2.9-1.6 5-7.7 23.5-17.5 46.5-28.9 69.2-0.2 0.4-1 1.9-1.5 2.4zm26-44c5-11.6 8.7-23.1 10.8-34.6 7.1 1.3 14.6 6 12.3 14.2 5.1 0 4 4.6 3.2 8-3.1 14.6-17.4 31.3-37.1 47.4zm12.5 17.9c5.1-5.5 9.4-11.3 13.2-17.5 7.1 12-1.9 26.6-12.9 33.1q-3.1 1.8-6.8 3.4zm-6.3 6.5q1.8-1.8 3.6-3.6l-5.8 16.9q-2.7 1.1-5.5 2.1zm-25.8 20.1c8.8-5.8 16.3-11.5 22.7-17.3l-6.6 13.2q-5.4 1.7-11.7 3.3c-1.4 0.4-2.5 0.7-4.4 0.8zm-28.5-3.3q-4-1.3-7.5-2.8l-12-21.8c4.2 4.9 9.1 9.9 14.7 14.9zm6.8 2.2q-2.5-0.8-4.9-1.5l-3.9-7.8q5.9 5.1 12.9 10.2c-1.8-0.2-2.8-0.5-4.1-0.9zm5.7-1.3q-3.2-2.7-6.4-5.4l-3.7-17.8c3.9 8.2 8.2 16.6 13 25.3-0.7-0.3-2.3-1.7-2.9-2.1zm-8.4-7.2c-19.5-17.2-33.4-35-35.9-49.9-0.6-3.4-1.6-8.1 3.5-7.8-1.9-8.3 5.8-12.7 12.9-13.6 2.3 15.8 7.4 31.8 14.7 48.4zm-14.1 2.5c-3.5-1.5-6.6-3.1-9.4-5-9.2-6-18.1-21.3-11.6-31.2q2.5 4 5.5 8z" />
							<path id="Layer" className="s1" d="m50.8 133.4l2.3 1.4v11.5h-1.7l-4.4-11.6 2.2-1.3c0.5-0.2 1.1-0.2 1.6 0zm18.4 0.6h-1l-2.5-1.4c-0.8-0.5-1.7-0.5-2.5 0l-2.4 1.3-2.3-1.3c-0.8-0.5-1.8-0.5-2.6 0l-2.3 1.3-2.3-1.3c-0.8-0.5-1.8-0.5-2.6 0l-2.5 1.4h-1c-1.2-4 1.7-5.9 2.9-6.5-0.1-1.9 1.7-4.1 3.4-4.9-0.2-1 0-2 0.5-2.9 1.7 2 6.2 1.6 7 1.5 4.7 0 6.4 3.7 7.1 5.9 2.8 1 4.1 3.9 3.1 6.9zm0.4 1.7l-3.6 9.6c-0.2 0.6-0.8 1-1.4 1h-0.5l4.3-11.3h0.7q0.3 0 0.4 0.2 0.2 0.3 0.1 0.5zm-11.6-2.3l2.3 1.4v11.5h-6.2v-11.5l2.4-1.4c0.4-0.2 1-0.2 1.5 0zm9.4 1.3l-4.4 11.6h-1.7v-11.5l2.4-1.4c0.4-0.2 1-0.2 1.5 0zm-21.4 0.3l4.3 11.4h-0.4c-0.7 0-1.2-0.4-1.5-1l-3.6-9.7q0-0.2 0.1-0.4 0.2-0.3 0.4-0.3z" />
						</g>
					</g>
				</svg></Link>
			</div>

			<div className='nameShop'>Солодкі Мандри</div>

			<nav className="navigate">
				<Link to={"/"}>Головна</Link>
				<Link to={"/products"}>Продукція</Link>
				<Link to={"/about"}>Про Нас</Link>
				<Link to={"/contacts"}>Контакти</Link>
			</nav>

		</div>
	)
}
export default Header;