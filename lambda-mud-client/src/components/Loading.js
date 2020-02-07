import React from 'react';



export default function Loading() {
	return <section>
			<progress class="nes-progress is-error" value="35" max="100"></progress>
				<form>
					<p>Loading ....</p>
				</form>
		</section>
};
