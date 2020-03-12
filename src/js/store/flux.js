import { AddContact } from "../views/AddContact";

const getState = ({ getStore, setStore, getActions }) => {
	return {
		store: {
			contacts: [
				{
					username: "",
					// phone: "",
					email: ""
					// address: ""
				}
			]

			//Your data structures, A.K.A Entities
			//Your data structures, A.K.A Entities
		},
		actions: {
			onDelete: bubu => {
				console.log(bubu);
				fetch("https://3000-b5d2c949-1fea-4f8a-9563-a96e3c82730b.ws-us02.gitpod.io/" + bubu, {
					method: "delete"
				})
					.then(response =>
						response.json().then(json => {
							return json;
						})
					)
					.catch(function(error) {
						console.log("Looks like there was a problem: \n", error);
					});
			},
			loadSomeData: () => {
				fetch("https://3000-b5d2c949-1fea-4f8a-9563-a96e3c82730b.ws-us02.gitpod.io/users")
					.then(function(response) {
						if (!response.ok) {
							throw Error(response.statusText);
						}
						// console.log("im working");
						return response.json();
					})
					.then(data => setStore({ contacts: data }))
					.catch(function(error) {
						console.log("Looks like there was a problem: \n", error);
					});
			},
			//(Arrow) Functions that update the Store
			// Remember to use the scope: scope.state.store & scope.setState()
			AddContact(myObj, props) {
				console.log(myObj);
				fetch("https://3000-b5d2c949-1fea-4f8a-9563-a96e3c82730b.ws-us02.gitpod.io", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(myObj)
				}).catch(e => console.error("errrrror" + e));
			},
			EditContact: myObj => {
				console.log(myObj);
				fetch("https://3000-b5d2c949-1fea-4f8a-9563-a96e3c82730b.ws-us02.gitpod.io/userstwo/" + myObj.id, {
					method: "PUT",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(myObj)
				}).catch(e => console.error("errrrror" + e));
			}
			// onDelete: bubu => {
			// console.log(bubu);
			// fetch("https://assets.breatheco.de/apis/fake/contact/" + bubu, {
			// 	method: "delete"
			// })
			// 	.then(response =>
			// 		response.json().then(json => {
			// 			return json;
			// 		})
			// 	)
			// 	.catch(function(error) {
			// 		console.log("Looks like there was a problem: \n", error);
			// 	});
		}
	};
};

export default getState;
