/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/data-sources/cluster_agent
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGitlabClusterAgentConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/data-sources/cluster_agent#agent_id DataGitlabClusterAgent#agent_id}
  */
  readonly agentId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/data-sources/cluster_agent#id DataGitlabClusterAgent#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * ID or full path of the project maintained by the authenticated user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/data-sources/cluster_agent#project DataGitlabClusterAgent#project}
  */
  readonly project: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/data-sources/cluster_agent gitlab_cluster_agent}
*/
export class DataGitlabClusterAgent extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gitlab_cluster_agent";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataGitlabClusterAgent resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataGitlabClusterAgent to import
  * @param importFromId The id of the existing DataGitlabClusterAgent that should be imported. Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/data-sources/cluster_agent#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataGitlabClusterAgent to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "gitlab_cluster_agent", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/data-sources/cluster_agent gitlab_cluster_agent} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGitlabClusterAgentConfig
  */
  public constructor(scope: Construct, id: string, config: DataGitlabClusterAgentConfig) {
    super(scope, id, {
      terraformResourceType: 'gitlab_cluster_agent',
      terraformGeneratorMetadata: {
        providerName: 'gitlab',
        providerVersion: '17.3.0',
        providerVersionConstraint: '~> 17.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._agentId = config.agentId;
    this._id = config.id;
    this._project = config.project;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // agent_id - computed: false, optional: false, required: true
  private _agentId?: number; 
  public get agentId() {
    return this.getNumberAttribute('agent_id');
  }
  public set agentId(value: number) {
    this._agentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get agentIdInput() {
    return this._agentId;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // created_by_user_id - computed: true, optional: false, required: false
  public get createdByUserId() {
    return this.getNumberAttribute('created_by_user_id');
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      agent_id: cdktf.numberToTerraform(this._agentId),
      id: cdktf.stringToTerraform(this._id),
      project: cdktf.stringToTerraform(this._project),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      agent_id: {
        value: cdktf.numberToHclTerraform(this._agentId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
