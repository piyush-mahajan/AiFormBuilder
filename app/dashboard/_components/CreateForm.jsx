"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../../@/components/ui/dialog";
import { Button } from "../../../@/components/ui/button";

const CreateForm = () => {
  const [openDialog, setOpenDialog] = useState(false);
  return (
    <div>
        <Button variant="outline" onClick={() => setOpenDialog(true)}>
          {" "}
          + Create Form{" "}
        </Button>

      <Dialog open={openDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CreateForm;
