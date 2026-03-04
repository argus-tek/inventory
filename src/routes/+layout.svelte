<script lang="ts">
	import "./layout.css";
	import { RuneProvider, version } from "rune-lab";
	import * as m from "$lib/paraglide/messages.js";
	import AppLayout from "./AppLayout.svelte";

	console.log("Rune Lab Version:", version());

	let { children } = $props();

	const sections = [
		{
			id: "lab",
			title: "Lab",
			items: [
				{ id: "dashboard", label: "🧪 Lab Dashboard", href: "/lab" },
			],
		},
		{
			id: "inventory",
			title: "Inventory",
			items: [
				{ id: "catalogs", label: "Catalogs" },
				{ id: "products", label: "Products" },
			],
		},
		{
			id: "sales",
			title: "Sales",
			items: [
				{ id: "orders", label: "Orders" },
				{ id: "customers", label: "Customers" },
			],
		},
		{
			id: "system",
			title: "System",
			items: [
				{ id: "users", label: "User Management" },
				{ id: "settings", label: "Settings" },
			],
		},
	];
</script>

<RuneProvider
	config={{
		app: { name: "Inventory", version: version() },
		apiUrl: "https://api.example.com",
		apiHealthCheck: async () => true,
		dictionary: m,
		favicon: "/img/rune.png",
	}}
>
	<AppLayout {sections}>
		{@render children()}
	</AppLayout>
</RuneProvider>
