/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/gitlabhq/gitlab/16.10.0/docs/data-sources/repository_file
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGitlabRepositoryFileConfig extends cdktf.TerraformMetaArguments {
  /**
  * The full path of the file. It must be relative to the root of the project without a leading slash `/` or `./`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.10.0/docs/data-sources/repository_file#file_path DataGitlabRepositoryFile#file_path}
  */
  readonly filePath: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.10.0/docs/data-sources/repository_file#id DataGitlabRepositoryFile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name or ID of the project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.10.0/docs/data-sources/repository_file#project DataGitlabRepositoryFile#project}
  */
  readonly project: string;
  /**
  * The name of branch, tag or commit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.10.0/docs/data-sources/repository_file#ref DataGitlabRepositoryFile#ref}
  */
  readonly ref: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.10.0/docs/data-sources/repository_file gitlab_repository_file}
*/
export class DataGitlabRepositoryFile extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gitlab_repository_file";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataGitlabRepositoryFile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataGitlabRepositoryFile to import
  * @param importFromId The id of the existing DataGitlabRepositoryFile that should be imported. Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.10.0/docs/data-sources/repository_file#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataGitlabRepositoryFile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "gitlab_repository_file", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.10.0/docs/data-sources/repository_file gitlab_repository_file} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGitlabRepositoryFileConfig
  */
  public constructor(scope: Construct, id: string, config: DataGitlabRepositoryFileConfig) {
    super(scope, id, {
      terraformResourceType: 'gitlab_repository_file',
      terraformGeneratorMetadata: {
        providerName: 'gitlab',
        providerVersion: '16.10.0',
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
    this._filePath = config.filePath;
    this._id = config.id;
    this._project = config.project;
    this._ref = config.ref;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // blob_id - computed: true, optional: false, required: false
  public get blobId() {
    return this.getStringAttribute('blob_id');
  }

  // commit_id - computed: true, optional: false, required: false
  public get commitId() {
    return this.getStringAttribute('commit_id');
  }

  // content - computed: true, optional: false, required: false
  public get content() {
    return this.getStringAttribute('content');
  }

  // content_sha256 - computed: true, optional: false, required: false
  public get contentSha256() {
    return this.getStringAttribute('content_sha256');
  }

  // encoding - computed: true, optional: false, required: false
  public get encoding() {
    return this.getStringAttribute('encoding');
  }

  // execute_filemode - computed: true, optional: false, required: false
  public get executeFilemode() {
    return this.getBooleanAttribute('execute_filemode');
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

  // ref - computed: false, optional: false, required: true
  private _ref?: string; 
  public get ref() {
    return this.getStringAttribute('ref');
  }
  public set ref(value: string) {
    this._ref = value;
  }
  // Temporarily expose input value. Use with caution.
  public get refInput() {
    return this._ref;
  }

  // size - computed: true, optional: false, required: false
  public get size() {
    return this.getNumberAttribute('size');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      file_path: cdktf.stringToTerraform(this._filePath),
      id: cdktf.stringToTerraform(this._id),
      project: cdktf.stringToTerraform(this._project),
      ref: cdktf.stringToTerraform(this._ref),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ref: {
        value: cdktf.stringToHclTerraform(this._ref),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
