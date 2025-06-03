/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/gitlabhq/gitlab/18.0.0/docs/data-sources/current_user
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGitlabCurrentUserConfig extends cdktf.TerraformMetaArguments {
}

/**
* Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.0.0/docs/data-sources/current_user gitlab_current_user}
*/
export class DataGitlabCurrentUser extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gitlab_current_user";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataGitlabCurrentUser resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataGitlabCurrentUser to import
  * @param importFromId The id of the existing DataGitlabCurrentUser that should be imported. Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.0.0/docs/data-sources/current_user#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataGitlabCurrentUser to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "gitlab_current_user", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.0.0/docs/data-sources/current_user gitlab_current_user} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGitlabCurrentUserConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataGitlabCurrentUserConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'gitlab_current_user',
      terraformGeneratorMetadata: {
        providerName: 'gitlab',
        providerVersion: '18.0.0',
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bot - computed: true, optional: false, required: false
  public get bot() {
    return this.getBooleanAttribute('bot');
  }

  // global_id - computed: true, optional: false, required: false
  public get globalId() {
    return this.getStringAttribute('global_id');
  }

  // global_namespace_id - computed: true, optional: false, required: false
  public get globalNamespaceId() {
    return this.getStringAttribute('global_namespace_id');
  }

  // group_count - computed: true, optional: false, required: false
  public get groupCount() {
    return this.getNumberAttribute('group_count');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // namespace_id - computed: true, optional: false, required: false
  public get namespaceId() {
    return this.getStringAttribute('namespace_id');
  }

  // public_email - computed: true, optional: false, required: false
  public get publicEmail() {
    return this.getStringAttribute('public_email');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
    };
    return attrs;
  }
}
