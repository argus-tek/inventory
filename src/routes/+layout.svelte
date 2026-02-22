<script lang="ts">
	import "./layout.css";
	import favicon from "$lib/assets/favicon.svg";
	import { RuneProvider, cookieDriver } from "rune-lab";
	import { m } from "$lib/paraglide/messages.js";
	import AppLayout from "./AppLayout.svelte";

	let { children } = $props();

	const sections = [
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
		app: { name: "Inventory System", version: "1.0.0" },
		persistence: cookieDriver(),
		dictionary: m,
		favicon: favicon,
	}}
>
	<AppLayout {sections}>
		{@render children()}
	</AppLayout>
</RuneProvider>
