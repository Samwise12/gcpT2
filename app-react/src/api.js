import axios from 'axios';

export default {
	data: {
		get: async () => {
				let getNames;
					await axios.get('/api/v1/names').then(res=> {
						getNames= res.data;
					});
					getNames.sort((a, b) => (a.id > b.id) ? 1 : -1);
				return getNames;	
				},
		post: async names => {
			await axios.post('/api/v1/names', {name: names.toString()}).then(res=> {
				console.log(res)
			}).catch(err=> console.log(err));
			return 'aaa';
		},
		del: async index=> {
			await axios.delete('/api/v1/names',{data: {id: index}})
			// .then(res=>console.log(res)).catch(err=>console.log(err));
		}
	}
}