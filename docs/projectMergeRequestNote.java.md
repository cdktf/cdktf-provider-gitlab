# `projectMergeRequestNote` Submodule <a name="`projectMergeRequestNote` Submodule" id="@cdktf/provider-gitlab.projectMergeRequestNote"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ProjectMergeRequestNote <a name="ProjectMergeRequestNote" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/resources/project_merge_request_note gitlab_project_merge_request_note}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.project_merge_request_note.ProjectMergeRequestNote;

ProjectMergeRequestNote.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .body(java.lang.String)
    .mergeRequestIid(java.lang.Number)
    .project(java.lang.String)
//  .createdAt(java.lang.String)
//  .internal(java.lang.Boolean|IResolvable)
//  .mergeRequestDiffHeadSha(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.Initializer.parameter.body">body</a></code> | <code>java.lang.String</code> | The body of the merge request note. |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.Initializer.parameter.mergeRequestIid">mergeRequestIid</a></code> | <code>java.lang.Number</code> | The IID of the merge request to add the note to. |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | The ID or path of the project to add the note to. |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.Initializer.parameter.createdAt">createdAt</a></code> | <code>java.lang.String</code> | The creation date of the merge request note. |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.Initializer.parameter.internal">internal</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Indicates if the merge request note is internal. |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.Initializer.parameter.mergeRequestDiffHeadSha">mergeRequestDiffHeadSha</a></code> | <code>java.lang.String</code> | The diff head SHA of the merge request when the note was created. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `body`<sup>Required</sup> <a name="body" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.Initializer.parameter.body"></a>

- *Type:* java.lang.String

The body of the merge request note.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/resources/project_merge_request_note#body ProjectMergeRequestNote#body}

---

##### `mergeRequestIid`<sup>Required</sup> <a name="mergeRequestIid" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.Initializer.parameter.mergeRequestIid"></a>

- *Type:* java.lang.Number

The IID of the merge request to add the note to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/resources/project_merge_request_note#merge_request_iid ProjectMergeRequestNote#merge_request_iid}

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.Initializer.parameter.project"></a>

- *Type:* java.lang.String

The ID or path of the project to add the note to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/resources/project_merge_request_note#project ProjectMergeRequestNote#project}

---

##### `createdAt`<sup>Optional</sup> <a name="createdAt" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.Initializer.parameter.createdAt"></a>

- *Type:* java.lang.String

The creation date of the merge request note.

Using this field requires the token used with the provider to either be an Admin, or hava a Project or Group Owner role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/resources/project_merge_request_note#created_at ProjectMergeRequestNote#created_at}

---

##### `internal`<sup>Optional</sup> <a name="internal" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.Initializer.parameter.internal"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Indicates if the merge request note is internal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/resources/project_merge_request_note#internal ProjectMergeRequestNote#internal}

---

##### `mergeRequestDiffHeadSha`<sup>Optional</sup> <a name="mergeRequestDiffHeadSha" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.Initializer.parameter.mergeRequestDiffHeadSha"></a>

- *Type:* java.lang.String

The diff head SHA of the merge request when the note was created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/resources/project_merge_request_note#merge_request_diff_head_sha ProjectMergeRequestNote#merge_request_diff_head_sha}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.resetCreatedAt">resetCreatedAt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.resetInternal">resetInternal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.resetMergeRequestDiffHeadSha">resetMergeRequestDiffHeadSha</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetCreatedAt` <a name="resetCreatedAt" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.resetCreatedAt"></a>

```java
public void resetCreatedAt()
```

##### `resetInternal` <a name="resetInternal" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.resetInternal"></a>

```java
public void resetInternal()
```

##### `resetMergeRequestDiffHeadSha` <a name="resetMergeRequestDiffHeadSha" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.resetMergeRequestDiffHeadSha"></a>

```java
public void resetMergeRequestDiffHeadSha()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ProjectMergeRequestNote resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.project_merge_request_note.ProjectMergeRequestNote;

ProjectMergeRequestNote.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.project_merge_request_note.ProjectMergeRequestNote;

ProjectMergeRequestNote.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.project_merge_request_note.ProjectMergeRequestNote;

ProjectMergeRequestNote.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.project_merge_request_note.ProjectMergeRequestNote;

ProjectMergeRequestNote.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ProjectMergeRequestNote.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ProjectMergeRequestNote resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ProjectMergeRequestNote to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ProjectMergeRequestNote that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/resources/project_merge_request_note#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ProjectMergeRequestNote to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.noteId">noteId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.resolvable">resolvable</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.systemAttribute">systemAttribute</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.updatedAt">updatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.bodyInput">bodyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.createdAtInput">createdAtInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.internalInput">internalInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.mergeRequestDiffHeadShaInput">mergeRequestDiffHeadShaInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.mergeRequestIidInput">mergeRequestIidInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.body">body</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.internal">internal</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.mergeRequestDiffHeadSha">mergeRequestDiffHeadSha</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.mergeRequestIid">mergeRequestIid</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `noteId`<sup>Required</sup> <a name="noteId" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.noteId"></a>

```java
public java.lang.Number getNoteId();
```

- *Type:* java.lang.Number

---

##### `resolvable`<sup>Required</sup> <a name="resolvable" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.resolvable"></a>

```java
public IResolvable getResolvable();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `systemAttribute`<sup>Required</sup> <a name="systemAttribute" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.systemAttribute"></a>

```java
public IResolvable getSystemAttribute();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.updatedAt"></a>

```java
public java.lang.String getUpdatedAt();
```

- *Type:* java.lang.String

---

##### `bodyInput`<sup>Optional</sup> <a name="bodyInput" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.bodyInput"></a>

```java
public java.lang.String getBodyInput();
```

- *Type:* java.lang.String

---

##### `createdAtInput`<sup>Optional</sup> <a name="createdAtInput" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.createdAtInput"></a>

```java
public java.lang.String getCreatedAtInput();
```

- *Type:* java.lang.String

---

##### `internalInput`<sup>Optional</sup> <a name="internalInput" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.internalInput"></a>

```java
public java.lang.Boolean|IResolvable getInternalInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `mergeRequestDiffHeadShaInput`<sup>Optional</sup> <a name="mergeRequestDiffHeadShaInput" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.mergeRequestDiffHeadShaInput"></a>

```java
public java.lang.String getMergeRequestDiffHeadShaInput();
```

- *Type:* java.lang.String

---

##### `mergeRequestIidInput`<sup>Optional</sup> <a name="mergeRequestIidInput" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.mergeRequestIidInput"></a>

```java
public java.lang.Number getMergeRequestIidInput();
```

- *Type:* java.lang.Number

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `body`<sup>Required</sup> <a name="body" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.body"></a>

```java
public java.lang.String getBody();
```

- *Type:* java.lang.String

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `internal`<sup>Required</sup> <a name="internal" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.internal"></a>

```java
public java.lang.Boolean|IResolvable getInternal();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `mergeRequestDiffHeadSha`<sup>Required</sup> <a name="mergeRequestDiffHeadSha" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.mergeRequestDiffHeadSha"></a>

```java
public java.lang.String getMergeRequestDiffHeadSha();
```

- *Type:* java.lang.String

---

##### `mergeRequestIid`<sup>Required</sup> <a name="mergeRequestIid" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.mergeRequestIid"></a>

```java
public java.lang.Number getMergeRequestIid();
```

- *Type:* java.lang.Number

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ProjectMergeRequestNoteConfig <a name="ProjectMergeRequestNoteConfig" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNoteConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNoteConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.project_merge_request_note.ProjectMergeRequestNoteConfig;

ProjectMergeRequestNoteConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .body(java.lang.String)
    .mergeRequestIid(java.lang.Number)
    .project(java.lang.String)
//  .createdAt(java.lang.String)
//  .internal(java.lang.Boolean|IResolvable)
//  .mergeRequestDiffHeadSha(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNoteConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNoteConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNoteConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNoteConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNoteConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNoteConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNoteConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNoteConfig.property.body">body</a></code> | <code>java.lang.String</code> | The body of the merge request note. |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNoteConfig.property.mergeRequestIid">mergeRequestIid</a></code> | <code>java.lang.Number</code> | The IID of the merge request to add the note to. |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNoteConfig.property.project">project</a></code> | <code>java.lang.String</code> | The ID or path of the project to add the note to. |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNoteConfig.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | The creation date of the merge request note. |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNoteConfig.property.internal">internal</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Indicates if the merge request note is internal. |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNoteConfig.property.mergeRequestDiffHeadSha">mergeRequestDiffHeadSha</a></code> | <code>java.lang.String</code> | The diff head SHA of the merge request when the note was created. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNoteConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNoteConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNoteConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNoteConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNoteConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNoteConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNoteConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `body`<sup>Required</sup> <a name="body" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNoteConfig.property.body"></a>

```java
public java.lang.String getBody();
```

- *Type:* java.lang.String

The body of the merge request note.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/resources/project_merge_request_note#body ProjectMergeRequestNote#body}

---

##### `mergeRequestIid`<sup>Required</sup> <a name="mergeRequestIid" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNoteConfig.property.mergeRequestIid"></a>

```java
public java.lang.Number getMergeRequestIid();
```

- *Type:* java.lang.Number

The IID of the merge request to add the note to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/resources/project_merge_request_note#merge_request_iid ProjectMergeRequestNote#merge_request_iid}

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNoteConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

The ID or path of the project to add the note to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/resources/project_merge_request_note#project ProjectMergeRequestNote#project}

---

##### `createdAt`<sup>Optional</sup> <a name="createdAt" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNoteConfig.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

The creation date of the merge request note.

Using this field requires the token used with the provider to either be an Admin, or hava a Project or Group Owner role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/resources/project_merge_request_note#created_at ProjectMergeRequestNote#created_at}

---

##### `internal`<sup>Optional</sup> <a name="internal" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNoteConfig.property.internal"></a>

```java
public java.lang.Boolean|IResolvable getInternal();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Indicates if the merge request note is internal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/resources/project_merge_request_note#internal ProjectMergeRequestNote#internal}

---

##### `mergeRequestDiffHeadSha`<sup>Optional</sup> <a name="mergeRequestDiffHeadSha" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNoteConfig.property.mergeRequestDiffHeadSha"></a>

```java
public java.lang.String getMergeRequestDiffHeadSha();
```

- *Type:* java.lang.String

The diff head SHA of the merge request when the note was created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/resources/project_merge_request_note#merge_request_diff_head_sha ProjectMergeRequestNote#merge_request_diff_head_sha}

---



