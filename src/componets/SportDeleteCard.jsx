"use client";

import { AlertDialog, Button } from "@heroui/react";
import { useRouter } from "next/navigation";

export function SportDeletePage({ data }) {

    const router = useRouter();

    const { _id, destinationName } = data;

    const handleDelete = async () => {
        try {
            const res = await fetch(`${process.env.BACKEND_URL}/sportsCollection/${_id}`, {
                method: 'DELETE',
            });

            const result = await res.json();

            console.log(result);

            router.push('/addPlayer');

        } catch (error) {
            console.log(error);
        }
    };

    return (
        <AlertDialog>
            <Button variant="danger">Delete Project</Button>

            <AlertDialog.Backdrop>
                <AlertDialog.Container>
                    <AlertDialog.Dialog className="sm:max-w-[400px]">

                        <AlertDialog.CloseTrigger />

                        <AlertDialog.Header>
                            <AlertDialog.Icon status="danger" />
                            <AlertDialog.Heading>
                                Delete project permanently?
                            </AlertDialog.Heading>
                        </AlertDialog.Header>

                        <AlertDialog.Body>
                            <p>
                                This will permanently delete{" "}
                                <strong>{destinationName}</strong> and all of its
                                data. This action cannot be undone.
                            </p>
                        </AlertDialog.Body>

                        <AlertDialog.Footer>
                            <Button slot="close" variant="tertiary">
                                Cancel
                            </Button>

                            <Button
                                onClick={handleDelete}
                                slot="close"
                                variant="danger"
                            >
                                Delete Project
                            </Button>
                        </AlertDialog.Footer>

                    </AlertDialog.Dialog>
                </AlertDialog.Container>
            </AlertDialog.Backdrop>
        </AlertDialog>
    );
}