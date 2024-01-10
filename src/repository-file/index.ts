// https://registry.terraform.io/providers/gitlabhq/gitlab/16.7.0/docs/resources/repository_file
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RepositoryFileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Email of the commit author.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.7.0/docs/resources/repository_file#author_email RepositoryFile#author_email}
  */
  readonly authorEmail?: string;
  /**
  * Name of the commit author.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.7.0/docs/resources/repository_file#author_name RepositoryFile#author_name}
  */
  readonly authorName?: string;
  /**
  * Name of the branch to which to commit to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.7.0/docs/resources/repository_file#branch RepositoryFile#branch}
  */
  readonly branch: string;
  /**
  * Commit message.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.7.0/docs/resources/repository_file#commit_message RepositoryFile#commit_message}
  */
  readonly commitMessage?: string;
  /**
  * File content.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.7.0/docs/resources/repository_file#content RepositoryFile#content}
  */
  readonly content: string;
  /**
  * Create commit message.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.7.0/docs/resources/repository_file#create_commit_message RepositoryFile#create_commit_message}
  */
  readonly createCommitMessage?: string;
  /**
  * Delete Commit message.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.7.0/docs/resources/repository_file#delete_commit_message RepositoryFile#delete_commit_message}
  */
  readonly deleteCommitMessage?: string;
  /**
  * The file content encoding. Default value is `base64`. Valid values are: `base64`, `text`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.7.0/docs/resources/repository_file#encoding RepositoryFile#encoding}
  */
  readonly encoding?: string;
  /**
  * Enables or disables the execute flag on the file. **Note**: requires GitLab 14.10 or newer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.7.0/docs/resources/repository_file#execute_filemode RepositoryFile#execute_filemode}
  */
  readonly executeFilemode?: boolean | cdktf.IResolvable;
  /**
  * The full path of the file. It must be relative to the root of the project without a leading slash `/` or `./`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.7.0/docs/resources/repository_file#file_path RepositoryFile#file_path}
  */
  readonly filePath: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.7.0/docs/resources/repository_file#id RepositoryFile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Enable overwriting existing files, defaults to `false`. This attribute is only used during `create` and must be use carefully. We suggest to use `imports` whenever possible and limit the use of this attribute for when the project was imported on the same `apply`. This attribute is not supported during a resource import.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.7.0/docs/resources/repository_file#overwrite_on_create RepositoryFile#overwrite_on_create}
  */
  readonly overwriteOnCreate?: boolean | cdktf.IResolvable;
  /**
  * The name or ID of the project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.7.0/docs/resources/repository_file#project RepositoryFile#project}
  */
  readonly project: string;
  /**
  * Name of the branch to start the new commit from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.7.0/docs/resources/repository_file#start_branch RepositoryFile#start_branch}
  */
  readonly startBranch?: string;
  /**
  * Update commit message.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.7.0/docs/resources/repository_file#update_commit_message RepositoryFile#update_commit_message}
  */
  readonly updateCommitMessage?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.7.0/docs/resources/repository_file#timeouts RepositoryFile#timeouts}
  */
  readonly timeouts?: RepositoryFileTimeouts;
}
export interface RepositoryFileTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.7.0/docs/resources/repository_file#create RepositoryFile#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.7.0/docs/resources/repository_file#delete RepositoryFile#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.7.0/docs/resources/repository_file#update RepositoryFile#update}
  */
  readonly update?: string;
}

export function repositoryFileTimeoutsToTerraform(struct?: RepositoryFileTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function repositoryFileTimeoutsToHclTerraform(struct?: RepositoryFileTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RepositoryFileTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RepositoryFileTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RepositoryFileTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.7.0/docs/resources/repository_file gitlab_repository_file}
*/
export class RepositoryFile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gitlab_repository_file";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RepositoryFile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RepositoryFile to import
  * @param importFromId The id of the existing RepositoryFile that should be imported. Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.7.0/docs/resources/repository_file#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RepositoryFile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "gitlab_repository_file", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.7.0/docs/resources/repository_file gitlab_repository_file} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RepositoryFileConfig
  */
  public constructor(scope: Construct, id: string, config: RepositoryFileConfig) {
    super(scope, id, {
      terraformResourceType: 'gitlab_repository_file',
      terraformGeneratorMetadata: {
        providerName: 'gitlab',
        providerVersion: '16.7.0',
        providerVersionConstraint: '~> 16.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._authorEmail = config.authorEmail;
    this._authorName = config.authorName;
    this._branch = config.branch;
    this._commitMessage = config.commitMessage;
    this._content = config.content;
    this._createCommitMessage = config.createCommitMessage;
    this._deleteCommitMessage = config.deleteCommitMessage;
    this._encoding = config.encoding;
    this._executeFilemode = config.executeFilemode;
    this._filePath = config.filePath;
    this._id = config.id;
    this._overwriteOnCreate = config.overwriteOnCreate;
    this._project = config.project;
    this._startBranch = config.startBranch;
    this._updateCommitMessage = config.updateCommitMessage;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // author_email - computed: false, optional: true, required: false
  private _authorEmail?: string; 
  public get authorEmail() {
    return this.getStringAttribute('author_email');
  }
  public set authorEmail(value: string) {
    this._authorEmail = value;
  }
  public resetAuthorEmail() {
    this._authorEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorEmailInput() {
    return this._authorEmail;
  }

  // author_name - computed: false, optional: true, required: false
  private _authorName?: string; 
  public get authorName() {
    return this.getStringAttribute('author_name');
  }
  public set authorName(value: string) {
    this._authorName = value;
  }
  public resetAuthorName() {
    this._authorName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorNameInput() {
    return this._authorName;
  }

  // blob_id - computed: true, optional: false, required: false
  public get blobId() {
    return this.getStringAttribute('blob_id');
  }

  // branch - computed: false, optional: false, required: true
  private _branch?: string; 
  public get branch() {
    return this.getStringAttribute('branch');
  }
  public set branch(value: string) {
    this._branch = value;
  }
  // Temporarily expose input value. Use with caution.
  public get branchInput() {
    return this._branch;
  }

  // commit_id - computed: true, optional: false, required: false
  public get commitId() {
    return this.getStringAttribute('commit_id');
  }

  // commit_message - computed: false, optional: true, required: false
  private _commitMessage?: string; 
  public get commitMessage() {
    return this.getStringAttribute('commit_message');
  }
  public set commitMessage(value: string) {
    this._commitMessage = value;
  }
  public resetCommitMessage() {
    this._commitMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commitMessageInput() {
    return this._commitMessage;
  }

  // content - computed: false, optional: false, required: true
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
  }

  // content_sha256 - computed: true, optional: false, required: false
  public get contentSha256() {
    return this.getStringAttribute('content_sha256');
  }

  // create_commit_message - computed: false, optional: true, required: false
  private _createCommitMessage?: string; 
  public get createCommitMessage() {
    return this.getStringAttribute('create_commit_message');
  }
  public set createCommitMessage(value: string) {
    this._createCommitMessage = value;
  }
  public resetCreateCommitMessage() {
    this._createCommitMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createCommitMessageInput() {
    return this._createCommitMessage;
  }

  // delete_commit_message - computed: false, optional: true, required: false
  private _deleteCommitMessage?: string; 
  public get deleteCommitMessage() {
    return this.getStringAttribute('delete_commit_message');
  }
  public set deleteCommitMessage(value: string) {
    this._deleteCommitMessage = value;
  }
  public resetDeleteCommitMessage() {
    this._deleteCommitMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteCommitMessageInput() {
    return this._deleteCommitMessage;
  }

  // encoding - computed: false, optional: true, required: false
  private _encoding?: string; 
  public get encoding() {
    return this.getStringAttribute('encoding');
  }
  public set encoding(value: string) {
    this._encoding = value;
  }
  public resetEncoding() {
    this._encoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encodingInput() {
    return this._encoding;
  }

  // execute_filemode - computed: false, optional: true, required: false
  private _executeFilemode?: boolean | cdktf.IResolvable; 
  public get executeFilemode() {
    return this.getBooleanAttribute('execute_filemode');
  }
  public set executeFilemode(value: boolean | cdktf.IResolvable) {
    this._executeFilemode = value;
  }
  public resetExecuteFilemode() {
    this._executeFilemode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executeFilemodeInput() {
    return this._executeFilemode;
  }

  // file_name - computed: true, optional: false, required: false
  public get fileName() {
    return this.getStringAttribute('file_name');
  }

  // file_path - computed: false, optional: false, required: true
  private _filePath?: string; 
  public get filePath() {
    return this.getStringAttribute('file_path');
  }
  public set filePath(value: string) {
    this._filePath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filePathInput() {
    return this._filePath;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // last_commit_id - computed: true, optional: false, required: false
  public get lastCommitId() {
    return this.getStringAttribute('last_commit_id');
  }

  // overwrite_on_create - computed: false, optional: true, required: false
  private _overwriteOnCreate?: boolean | cdktf.IResolvable; 
  public get overwriteOnCreate() {
    return this.getBooleanAttribute('overwrite_on_create');
  }
  public set overwriteOnCreate(value: boolean | cdktf.IResolvable) {
    this._overwriteOnCreate = value;
  }
  public resetOverwriteOnCreate() {
    this._overwriteOnCreate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overwriteOnCreateInput() {
    return this._overwriteOnCreate;
  }

  // project - computed: false, optional: false, required: true
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // size - computed: true, optional: false, required: false
  public get size() {
    return this.getNumberAttribute('size');
  }

  // start_branch - computed: false, optional: true, required: false
  private _startBranch?: string; 
  public get startBranch() {
    return this.getStringAttribute('start_branch');
  }
  public set startBranch(value: string) {
    this._startBranch = value;
  }
  public resetStartBranch() {
    this._startBranch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startBranchInput() {
    return this._startBranch;
  }

  // update_commit_message - computed: false, optional: true, required: false
  private _updateCommitMessage?: string; 
  public get updateCommitMessage() {
    return this.getStringAttribute('update_commit_message');
  }
  public set updateCommitMessage(value: string) {
    this._updateCommitMessage = value;
  }
  public resetUpdateCommitMessage() {
    this._updateCommitMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateCommitMessageInput() {
    return this._updateCommitMessage;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new RepositoryFileTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: RepositoryFileTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      author_email: cdktf.stringToTerraform(this._authorEmail),
      author_name: cdktf.stringToTerraform(this._authorName),
      branch: cdktf.stringToTerraform(this._branch),
      commit_message: cdktf.stringToTerraform(this._commitMessage),
      content: cdktf.stringToTerraform(this._content),
      create_commit_message: cdktf.stringToTerraform(this._createCommitMessage),
      delete_commit_message: cdktf.stringToTerraform(this._deleteCommitMessage),
      encoding: cdktf.stringToTerraform(this._encoding),
      execute_filemode: cdktf.booleanToTerraform(this._executeFilemode),
      file_path: cdktf.stringToTerraform(this._filePath),
      id: cdktf.stringToTerraform(this._id),
      overwrite_on_create: cdktf.booleanToTerraform(this._overwriteOnCreate),
      project: cdktf.stringToTerraform(this._project),
      start_branch: cdktf.stringToTerraform(this._startBranch),
      update_commit_message: cdktf.stringToTerraform(this._updateCommitMessage),
      timeouts: repositoryFileTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      author_email: {
        value: cdktf.stringToHclTerraform(this._authorEmail),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      author_name: {
        value: cdktf.stringToHclTerraform(this._authorName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      branch: {
        value: cdktf.stringToHclTerraform(this._branch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      commit_message: {
        value: cdktf.stringToHclTerraform(this._commitMessage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      content: {
        value: cdktf.stringToHclTerraform(this._content),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      create_commit_message: {
        value: cdktf.stringToHclTerraform(this._createCommitMessage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delete_commit_message: {
        value: cdktf.stringToHclTerraform(this._deleteCommitMessage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      encoding: {
        value: cdktf.stringToHclTerraform(this._encoding),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      execute_filemode: {
        value: cdktf.booleanToHclTerraform(this._executeFilemode),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      file_path: {
        value: cdktf.stringToHclTerraform(this._filePath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      overwrite_on_create: {
        value: cdktf.booleanToHclTerraform(this._overwriteOnCreate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      start_branch: {
        value: cdktf.stringToHclTerraform(this._startBranch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      update_commit_message: {
        value: cdktf.stringToHclTerraform(this._updateCommitMessage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: repositoryFileTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "RepositoryFileTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
