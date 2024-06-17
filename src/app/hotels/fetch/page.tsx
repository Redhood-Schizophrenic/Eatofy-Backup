'use client';
import { useEffect, useState } from "react";

export default function BookingsPage() {

	const [data, setData] = useState([]);

	useEffect(() => {

		const fetchData = async () => {
			try {
				const res = await fetch('/api/hotels/fetch');
				const response = await res.json();
				setData(response.output);
			}
			catch (error) {
				alert(error.message);
			}


		}

		fetchData();

	}, []);

	return (
		<section className="w-[100dvw] h-auto pt-[15dvh]">
			<div className="flex justify-center items-center">
				{
					data.map((items) => (
						<div key={items.id} className="w-[80dvw] flex flex-col">
							<div id="package-name">
								<h1 className="text-2xl font-semibold">
									{items.HotelName}
								</h1>
							</div>
							<div className="flex flex-col lg:flex-row gap-4 pt-4" id="image">
								<div className="lg:w-[50%] rounded-lg transition-all duration-700 hover:bg-black">
									<img src={`data:image/*;base64,${items.HotelLogo}`} className="rounded-lg shadow-lg shadow-gray-400 hover:opacity-60" />
								</div>
							</div>

						</div>


					))

				}
			</div>
		</section>
	);
}

