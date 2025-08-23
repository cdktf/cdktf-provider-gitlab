/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/project_merge_request_note
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProjectMergeRequestNoteConfig extends cdktf.TerraformMetaArguments {
  /**
  * The body of the merge request note.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/project_merge_request_note#body ProjectMergeRequestNote#body}
  */
  readonly body: string;
  /**
  * The creation date of the merge request note. Using this field requires the token used with the provider to either be an Admin, or hava a Project or Group Owner role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/project_merge_request_note#created_at ProjectMergeRequestNote#created_at}
  */
  readonly createdAt?: string;
  /**
  * Indicates if the merge request note is internal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/project_merge_request_note#internal ProjectMergeRequestNote#internal}
  */
  readonly internal?: boolean | cdktf.IResolvable;
  /**
  * The diff head SHA of the merge request when the note was created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/project_merge_request_note#merge_request_diff_head_sha ProjectMergeRequestNote#merge_request_diff_head_sha}
  */
  readonly mergeRequestDiffHeadSha?: string;
  /**
  * The IID of the merge request to add the note to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/project_merge_request_note#merge_request_iid ProjectMergeRequestNote#merge_request_iid}
  */
  readonly mergeRequestIid: number;
  /**
  * The ID or path of the project to add the note to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/project_merge_request_note#project ProjectMergeRequestNote#project}
  */
  readonly project: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/project_merge_request_note gitlab_project_merge_request_note}
*/
export class ProjectMergeRequestNote extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gitlab_project_merge_request_note";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ProjectMergeRequestNote resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ProjectMergeRequestNote to import
  * @param importFromId The id of the existing ProjectMergeRequestNote that should be imported. Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/project_merge_request_note#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ProjectMergeRequestNote to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "gitlab_project_merge_request_note", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/project_merge_request_note gitlab_project_merge_request_note} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProjectMergeRequestNoteConfig
  */
  public constructor(scope: Construct, id: string, config: ProjectMergeRequestNoteConfig) {
    super(scope, id, {
      terraformResourceType: 'gitlab_project_merge_request_note',
      terraformGeneratorMetadata: {
        providerName: 'gitlab',
        providerVersion: '18.3.0',
        providerVersionConstraint: '~> 18.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._body = config.body;
    this._createdAt = config.createdAt;
    this._internal = config.internal;
    this._mergeRequestDiffHeadSha = config.mergeRequestDiffHeadSha;
    this._mergeRequestIid = config.mergeRequestIid;
    this._project = config.project;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // body - computed: false, optional: false, required: true
  private _body?: string; 
  public get body() {
    return this.getStringAttribute('body');
  }
  public set body(value: string) {
    this._body = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body;
  }

  // created_at - computed: true, optional: true, required: false
  private _createdAt?: string; 
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }
  public set createdAt(value: string) {
    this._createdAt = value;
  }
  public resetCreatedAt() {
    this._createdAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdAtInput() {
    return this._createdAt;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // internal - computed: true, optional: true, required: false
  private _internal?: boolean | cdktf.IResolvable; 
  public get internal() {
    return this.getBooleanAttribute('internal');
  }
  public set internal(value: boolean | cdktf.IResolvable) {
    this._internal = value;
  }
  public resetInternal() {
    this._internal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internalInput() {
    return this._internal;
  }

  // merge_request_diff_head_sha - computed: false, optional: true, required: false
  private _mergeRequestDiffHeadSha?: string; 
  public get mergeRequestDiffHeadSha() {
    return this.getStringAttribute('merge_request_diff_head_sha');
  }
  public set mergeRequestDiffHeadSha(value: string) {
    this._mergeRequestDiffHeadSha = value;
  }
  public resetMergeRequestDiffHeadSha() {
    this._mergeRequestDiffHeadSha = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mergeRequestDiffHeadShaInput() {
    return this._mergeRequestDiffHeadSha;
  }

  // merge_request_iid - computed: false, optional: false, required: true
  private _mergeRequestIid?: number; 
  public get mergeRequestIid() {
    return this.getNumberAttribute('merge_request_iid');
  }
  public set mergeRequestIid(value: number) {
    this._mergeRequestIid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mergeRequestIidInput() {
    return this._mergeRequestIid;
  }

  // note_id - computed: true, optional: false, required: false
  public get noteId() {
    return this.getNumberAttribute('note_id');
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

  // resolvable - computed: true, optional: false, required: false
  public get resolvable() {
    return this.getBooleanAttribute('resolvable');
  }

  // system - computed: true, optional: false, required: false
  public get systemAttribute() {
    return this.getBooleanAttribute('system');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      body: cdktf.stringToTerraform(this._body),
      created_at: cdktf.stringToTerraform(this._createdAt),
      internal: cdktf.booleanToTerraform(this._internal),
      merge_request_diff_head_sha: cdktf.stringToTerraform(this._mergeRequestDiffHeadSha),
      merge_request_iid: cdktf.numberToTerraform(this._mergeRequestIid),
      project: cdktf.stringToTerraform(this._project),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      body: {
        value: cdktf.stringToHclTerraform(this._body),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      created_at: {
        value: cdktf.stringToHclTerraform(this._createdAt),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      internal: {
        value: cdktf.booleanToHclTerraform(this._internal),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      merge_request_diff_head_sha: {
        value: cdktf.stringToHclTerraform(this._mergeRequestDiffHeadSha),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      merge_request_iid: {
        value: cdktf.numberToHclTerraform(this._mergeRequestIid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
