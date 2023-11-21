import React from 'react'
import { Paginator }  from '../pagination/Paginator'

export const Products = ({ products=[] }) => {
    return (
		<div>
			{ 
				(products.slice(0, 5)).map((product, index) => 
				<div key={index} >
					{index + 1}. {product}
				</div> )
			}
			<Paginator 
				totalCount={products.length}
				pageSize={5} 
				onNext={(n) => {}} 
				onPrev={(p) => {}} 
			/>
		</div>
	)
}
