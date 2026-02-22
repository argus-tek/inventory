<script lang="ts">
    import { getLayoutStore } from "rune-lab";

    const layout = getLayoutStore();
</script>

<div class="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
    <header
        class="flex items-end justify-between border-b border-base-content/10 pb-6"
    >
        <div>
            <h1 class="text-3xl font-bold tracking-tight text-base-content">
                Welcome back, Admin
            </h1>
            <p class="text-base-content/60 mt-1">
                Here is what's happening with your inventory today.
            </p>
        </div>
        <div class="flex gap-4">
            <button class="btn btn-outline btn-sm">Report</button>
            <button class="btn btn-primary btn-sm">New Sale</button>
        </div>
    </header>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div class="card bg-base-200 p-6">
            <h3
                class="font-semibold text-sm opacity-60 uppercase tracking-wider mb-2"
            >
                Total Revenue
            </h3>
            <p class="text-3xl font-bold">$45,231.89</p>
            <p class="text-success text-sm mt-2 font-medium">
                ↑ 20.1% from last month
            </p>
        </div>
        <div class="card bg-base-200 p-6">
            <h3
                class="font-semibold text-sm opacity-60 uppercase tracking-wider mb-2"
            >
                Units Sold
            </h3>
            <p class="text-3xl font-bold">+2,350</p>
            <p class="text-success text-sm mt-2 font-medium">
                ↑ 15% from last month
            </p>
        </div>
        <div class="card bg-base-200 p-6">
            <h3
                class="font-semibold text-sm opacity-60 uppercase tracking-wider mb-2"
            >
                Pending Orders
            </h3>
            <p class="text-3xl font-bold leading-none">12</p>
            <p class="text-warning text-sm mt-2 font-medium">
                3 require attention
            </p>
        </div>
        <div
            class="card bg-primary text-primary-content p-6 flex flex-col justify-center items-center shadow-lg shadow-primary/20 cursor-pointer transition-transform hover:scale-105 active:scale-95 text-center"
            onclick={() => layout.toggleDetail()}
            role="button"
            tabindex="0"
            onkeydown={(e) => e.key === "Enter" && layout.toggleDetail()}
        >
            <p
                class="text-sm font-semibold opacity-80 uppercase tracking-wider"
            >
                Storage Health
            </p>
            <h2 class="text-4xl font-black mt-2">Good</h2>
            <p class="text-xs opacity-70 mt-1 flex items-center gap-1">
                Click to view detail panel →
            </p>
        </div>
    </div>

    <!-- Active Tasks / List area -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div
            class="card bg-base-100 border border-base-content/10 lg:col-span-2 shadow-sm"
        >
            <div class="card-body">
                <h2 class="card-title text-xl mb-4">Recent Transactions</h2>
                <div class="overflow-x-auto">
                    <table class="table">
                        <thead>
                            <tr>
                                <th>Order ID</th>
                                <th>Customer</th>
                                <th>Status</th>
                                <th>Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr
                                class="hover cursor-pointer"
                                onclick={() => layout.toggleDetail()}
                            >
                                <td class="font-mono text-sm opacity-70"
                                    >#ORD-9012</td
                                >
                                <td class="font-medium">Acme Corp</td>
                                <td
                                    ><span class="badge badge-success badge-sm"
                                        >Fulfilled</span
                                    ></td
                                >
                                <td class="text-right font-medium">$1,250.00</td
                                >
                            </tr>
                            <tr
                                class="hover cursor-pointer"
                                onclick={() => layout.toggleDetail()}
                            >
                                <td class="font-mono text-sm opacity-70"
                                    >#ORD-9013</td
                                >
                                <td class="font-medium">Globex Inc</td>
                                <td
                                    ><span class="badge badge-warning badge-sm"
                                        >Processing</span
                                    ></td
                                >
                                <td class="text-right font-medium">$890.50</td>
                            </tr>
                            <tr
                                class="hover cursor-pointer"
                                onclick={() => layout.toggleDetail()}
                            >
                                <td class="font-mono text-sm opacity-70"
                                    >#ORD-9014</td
                                >
                                <td class="font-medium">Initech</td>
                                <td
                                    ><span class="badge badge-error badge-sm"
                                        >Failed</span
                                    ></td
                                >
                                <td class="text-right font-medium">$420.00</td>
                            </tr>
                            <tr
                                class="hover cursor-pointer"
                                onclick={() => layout.toggleDetail()}
                            >
                                <td class="font-mono text-sm opacity-70"
                                    >#ORD-9015</td
                                >
                                <td class="font-medium">Soylent Corp</td>
                                <td
                                    ><span class="badge badge-success badge-sm"
                                        >Fulfilled</span
                                    ></td
                                >
                                <td class="text-right font-medium">$3,100.00</td
                                >
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <div class="card bg-base-100 border border-base-content/10 shadow-sm">
            <div class="card-body">
                <h2 class="card-title text-xl mb-4">Low Stock Alerts</h2>
                <ul class="space-y-4">
                    <li class="flex items-center justify-between">
                        <div class="flex items-center gap-3">
                            <div class="w-2 h-2 rounded-full bg-error"></div>
                            <span class="font-medium">WRC-290 Router</span>
                        </div>
                        <span class="text-sm font-mono opacity-60">2 left</span>
                    </li>
                    <li class="flex items-center justify-between">
                        <div class="flex items-center gap-3">
                            <div class="w-2 h-2 rounded-full bg-warning"></div>
                            <span class="font-medium">Cat6 Cable Box</span>
                        </div>
                        <span class="text-sm font-mono opacity-60">5 left</span>
                    </li>
                    <li class="flex items-center justify-between">
                        <div class="flex items-center gap-3">
                            <div class="w-2 h-2 rounded-full bg-warning"></div>
                            <span class="font-medium">RJ45 Connectors</span>
                        </div>
                        <span class="text-sm font-mono opacity-60">12 left</span
                        >
                    </li>
                </ul>
                <div class="mt-6">
                    <button class="btn btn-outline btn-block btn-sm"
                        >Order Supplies</button
                    >
                </div>
            </div>
        </div>
    </div>
</div>
