import type { HistoryEntry, ProduceStatus } from '@/lib/definitions';
import { CheckCircle, Circle, HardHat, Package, ShoppingCart, Truck } from 'lucide-react';
import { format } from 'date-fns';

const statusIcons: Record<ProduceStatus, React.ReactNode> = {
    Harvested: <HardHat className="h-5 w-5" />,
    'In Transit': <Truck className="h-5 w-5" />,
    'At Market': <ShoppingCart className="h-5 w-5" />,
    Sold: <Package className="h-5 w-5" />,
};

interface StatusTimelineProps {
    history: HistoryEntry[];
    currentStatus: ProduceStatus;
}

export function StatusTimeline({ history, currentStatus }: StatusTimelineProps) {
    const allStatuses: ProduceStatus[] = ['Harvested', 'In Transit', 'At Market', 'Sold'];

    return (
        <div className="space-y-8">
            {allStatuses.map((status, index) => {
                const historyEntry = history.find(h => h.status === status);
                const isActive = history.some(h => h.status === status);
                const isCurrent = currentStatus === status;
                
                return (
                    <div key={status} className="flex gap-4">
                        <div className="flex flex-col items-center">
                            <div className={`flex h-10 w-10 items-center justify-center rounded-full ${isActive ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}`}>
                                {statusIcons[status]}
                            </div>
                            {index < allStatuses.length - 1 && <div className={`w-px flex-grow ${isActive ? 'bg-primary' : 'bg-border'}`}></div>}
                        </div>
                        <div className="pt-1.5 flex-1">
                            <h3 className={`font-semibold ${isActive ? 'text-foreground' : 'text-muted-foreground'}`}>{status}</h3>
                            {historyEntry ? (
                                <>
                                    <p className="text-sm text-muted-foreground">{`by ${historyEntry.updatedBy}`}</p>
                                    <time className="text-sm text-muted-foreground">{format(new Date(historyEntry.timestamp), "MMM d, yyyy 'at' h:mm a")}</time>
                                </>
                            ) : (
                                <p className="text-sm text-muted-foreground">Pending</p>
                            )}
                        </div>
                    </div>
                )
            })}
        </div>
    );
}
