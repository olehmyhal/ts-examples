type ReadOrWrite = "read" | "write";

type Access = `can${Capitalize<ReadOrWrite>}`;
