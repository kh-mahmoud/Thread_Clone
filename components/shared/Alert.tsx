import Link from "next/link";

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
  } from "@/components/ui/alert-dialog"

const Alert = ({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: React.Dispatch<React.SetStateAction<boolean>> }) => {
    return (
        <div>
            <AlertDialog  open={isOpen} onOpenChange={setIsOpen}>
                <AlertDialogContent className="bg-dark-2 border-transparent ">
                    <AlertDialogHeader>
                        <AlertDialogTitle className="text-white">Sign in required</AlertDialogTitle>
                        <AlertDialogDescription>
                            You need to sign in to like this thread.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter className="flex gap-4">
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        {/* Instead of direct text, use a Link component for sign-in */}
                        <AlertDialogAction>
                            <Link href="/sign-in">Sign in</Link>
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    );
}

export default Alert;
