# `gitlab_group_hook`

Refer to the Terraform Registory for docs: [`gitlab_group_hook`](https://registry.terraform.io/providers/gitlabhq/gitlab/16.6.0/docs/resources/group_hook).

# `groupHook` Submodule <a name="`groupHook` Submodule" id="@cdktf/provider-gitlab.groupHook"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GroupHook <a name="GroupHook" id="@cdktf/provider-gitlab.groupHook.GroupHook"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.6.0/docs/resources/group_hook gitlab_group_hook}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.groupHook.GroupHook.Initializer"></a>

```typescript
import { groupHook } from '@cdktf/provider-gitlab'

new groupHook.GroupHook(scope: Construct, id: string, config: GroupHookConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookConfig">GroupHookConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.groupHook.GroupHook.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.groupHook.GroupHook.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-gitlab.groupHook.GroupHook.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.groupHook.GroupHookConfig">GroupHookConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.resetConfidentialIssuesEvents">resetConfidentialIssuesEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.resetConfidentialNoteEvents">resetConfidentialNoteEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.resetDeploymentEvents">resetDeploymentEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.resetEnableSslVerification">resetEnableSslVerification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.resetIssuesEvents">resetIssuesEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.resetJobEvents">resetJobEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.resetMergeRequestsEvents">resetMergeRequestsEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.resetNoteEvents">resetNoteEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.resetPipelineEvents">resetPipelineEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.resetPushEvents">resetPushEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.resetPushEventsBranchFilter">resetPushEventsBranchFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.resetReleasesEvents">resetReleasesEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.resetSubgroupEvents">resetSubgroupEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.resetTagPushEvents">resetTagPushEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.resetToken">resetToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.resetWikiPageEvents">resetWikiPageEvents</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.groupHook.GroupHook.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-gitlab.groupHook.GroupHook.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.groupHook.GroupHook.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.groupHook.GroupHook.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-gitlab.groupHook.GroupHook.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-gitlab.groupHook.GroupHook.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-gitlab.groupHook.GroupHook.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-gitlab.groupHook.GroupHook.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-gitlab.groupHook.GroupHook.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-gitlab.groupHook.GroupHook.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.groupHook.GroupHook.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.groupHook.GroupHook.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupHook.GroupHook.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.groupHook.GroupHook.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupHook.GroupHook.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.groupHook.GroupHook.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupHook.GroupHook.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.groupHook.GroupHook.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupHook.GroupHook.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.groupHook.GroupHook.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupHook.GroupHook.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.groupHook.GroupHook.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupHook.GroupHook.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.groupHook.GroupHook.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupHook.GroupHook.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.groupHook.GroupHook.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupHook.GroupHook.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.groupHook.GroupHook.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupHook.GroupHook.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `importFrom` <a name="importFrom" id="@cdktf/provider-gitlab.groupHook.GroupHook.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.groupHook.GroupHook.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.groupHook.GroupHook.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.groupHook.GroupHook.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupHook.GroupHook.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-gitlab.groupHook.GroupHook.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.groupHook.GroupHook.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-gitlab.groupHook.GroupHook.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `resetConfidentialIssuesEvents` <a name="resetConfidentialIssuesEvents" id="@cdktf/provider-gitlab.groupHook.GroupHook.resetConfidentialIssuesEvents"></a>

```typescript
public resetConfidentialIssuesEvents(): void
```

##### `resetConfidentialNoteEvents` <a name="resetConfidentialNoteEvents" id="@cdktf/provider-gitlab.groupHook.GroupHook.resetConfidentialNoteEvents"></a>

```typescript
public resetConfidentialNoteEvents(): void
```

##### `resetDeploymentEvents` <a name="resetDeploymentEvents" id="@cdktf/provider-gitlab.groupHook.GroupHook.resetDeploymentEvents"></a>

```typescript
public resetDeploymentEvents(): void
```

##### `resetEnableSslVerification` <a name="resetEnableSslVerification" id="@cdktf/provider-gitlab.groupHook.GroupHook.resetEnableSslVerification"></a>

```typescript
public resetEnableSslVerification(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-gitlab.groupHook.GroupHook.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIssuesEvents` <a name="resetIssuesEvents" id="@cdktf/provider-gitlab.groupHook.GroupHook.resetIssuesEvents"></a>

```typescript
public resetIssuesEvents(): void
```

##### `resetJobEvents` <a name="resetJobEvents" id="@cdktf/provider-gitlab.groupHook.GroupHook.resetJobEvents"></a>

```typescript
public resetJobEvents(): void
```

##### `resetMergeRequestsEvents` <a name="resetMergeRequestsEvents" id="@cdktf/provider-gitlab.groupHook.GroupHook.resetMergeRequestsEvents"></a>

```typescript
public resetMergeRequestsEvents(): void
```

##### `resetNoteEvents` <a name="resetNoteEvents" id="@cdktf/provider-gitlab.groupHook.GroupHook.resetNoteEvents"></a>

```typescript
public resetNoteEvents(): void
```

##### `resetPipelineEvents` <a name="resetPipelineEvents" id="@cdktf/provider-gitlab.groupHook.GroupHook.resetPipelineEvents"></a>

```typescript
public resetPipelineEvents(): void
```

##### `resetPushEvents` <a name="resetPushEvents" id="@cdktf/provider-gitlab.groupHook.GroupHook.resetPushEvents"></a>

```typescript
public resetPushEvents(): void
```

##### `resetPushEventsBranchFilter` <a name="resetPushEventsBranchFilter" id="@cdktf/provider-gitlab.groupHook.GroupHook.resetPushEventsBranchFilter"></a>

```typescript
public resetPushEventsBranchFilter(): void
```

##### `resetReleasesEvents` <a name="resetReleasesEvents" id="@cdktf/provider-gitlab.groupHook.GroupHook.resetReleasesEvents"></a>

```typescript
public resetReleasesEvents(): void
```

##### `resetSubgroupEvents` <a name="resetSubgroupEvents" id="@cdktf/provider-gitlab.groupHook.GroupHook.resetSubgroupEvents"></a>

```typescript
public resetSubgroupEvents(): void
```

##### `resetTagPushEvents` <a name="resetTagPushEvents" id="@cdktf/provider-gitlab.groupHook.GroupHook.resetTagPushEvents"></a>

```typescript
public resetTagPushEvents(): void
```

##### `resetToken` <a name="resetToken" id="@cdktf/provider-gitlab.groupHook.GroupHook.resetToken"></a>

```typescript
public resetToken(): void
```

##### `resetWikiPageEvents` <a name="resetWikiPageEvents" id="@cdktf/provider-gitlab.groupHook.GroupHook.resetWikiPageEvents"></a>

```typescript
public resetWikiPageEvents(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GroupHook resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-gitlab.groupHook.GroupHook.isConstruct"></a>

```typescript
import { groupHook } from '@cdktf/provider-gitlab'

groupHook.GroupHook.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.groupHook.GroupHook.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-gitlab.groupHook.GroupHook.isTerraformElement"></a>

```typescript
import { groupHook } from '@cdktf/provider-gitlab'

groupHook.GroupHook.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.groupHook.GroupHook.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-gitlab.groupHook.GroupHook.isTerraformResource"></a>

```typescript
import { groupHook } from '@cdktf/provider-gitlab'

groupHook.GroupHook.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.groupHook.GroupHook.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-gitlab.groupHook.GroupHook.generateConfigForImport"></a>

```typescript
import { groupHook } from '@cdktf/provider-gitlab'

groupHook.GroupHook.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GroupHook resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.groupHook.GroupHook.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-gitlab.groupHook.GroupHook.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GroupHook to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-gitlab.groupHook.GroupHook.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GroupHook that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.6.0/docs/resources/group_hook#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.groupHook.GroupHook.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GroupHook to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.groupId">groupId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.hookId">hookId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.confidentialIssuesEventsInput">confidentialIssuesEventsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.confidentialNoteEventsInput">confidentialNoteEventsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.deploymentEventsInput">deploymentEventsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.enableSslVerificationInput">enableSslVerificationInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.groupInput">groupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.issuesEventsInput">issuesEventsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.jobEventsInput">jobEventsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.mergeRequestsEventsInput">mergeRequestsEventsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.noteEventsInput">noteEventsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.pipelineEventsInput">pipelineEventsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.pushEventsBranchFilterInput">pushEventsBranchFilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.pushEventsInput">pushEventsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.releasesEventsInput">releasesEventsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.subgroupEventsInput">subgroupEventsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.tagPushEventsInput">tagPushEventsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.tokenInput">tokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.urlInput">urlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.wikiPageEventsInput">wikiPageEventsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.confidentialIssuesEvents">confidentialIssuesEvents</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.confidentialNoteEvents">confidentialNoteEvents</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.deploymentEvents">deploymentEvents</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.enableSslVerification">enableSslVerification</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.group">group</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.issuesEvents">issuesEvents</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.jobEvents">jobEvents</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.mergeRequestsEvents">mergeRequestsEvents</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.noteEvents">noteEvents</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.pipelineEvents">pipelineEvents</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.pushEvents">pushEvents</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.pushEventsBranchFilter">pushEventsBranchFilter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.releasesEvents">releasesEvents</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.subgroupEvents">subgroupEvents</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.tagPushEvents">tagPushEvents</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.token">token</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.wikiPageEvents">wikiPageEvents</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.groupId"></a>

```typescript
public readonly groupId: number;
```

- *Type:* number

---

##### `hookId`<sup>Required</sup> <a name="hookId" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.hookId"></a>

```typescript
public readonly hookId: number;
```

- *Type:* number

---

##### `confidentialIssuesEventsInput`<sup>Optional</sup> <a name="confidentialIssuesEventsInput" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.confidentialIssuesEventsInput"></a>

```typescript
public readonly confidentialIssuesEventsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `confidentialNoteEventsInput`<sup>Optional</sup> <a name="confidentialNoteEventsInput" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.confidentialNoteEventsInput"></a>

```typescript
public readonly confidentialNoteEventsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `deploymentEventsInput`<sup>Optional</sup> <a name="deploymentEventsInput" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.deploymentEventsInput"></a>

```typescript
public readonly deploymentEventsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableSslVerificationInput`<sup>Optional</sup> <a name="enableSslVerificationInput" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.enableSslVerificationInput"></a>

```typescript
public readonly enableSslVerificationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `groupInput`<sup>Optional</sup> <a name="groupInput" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.groupInput"></a>

```typescript
public readonly groupInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `issuesEventsInput`<sup>Optional</sup> <a name="issuesEventsInput" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.issuesEventsInput"></a>

```typescript
public readonly issuesEventsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `jobEventsInput`<sup>Optional</sup> <a name="jobEventsInput" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.jobEventsInput"></a>

```typescript
public readonly jobEventsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `mergeRequestsEventsInput`<sup>Optional</sup> <a name="mergeRequestsEventsInput" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.mergeRequestsEventsInput"></a>

```typescript
public readonly mergeRequestsEventsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `noteEventsInput`<sup>Optional</sup> <a name="noteEventsInput" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.noteEventsInput"></a>

```typescript
public readonly noteEventsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `pipelineEventsInput`<sup>Optional</sup> <a name="pipelineEventsInput" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.pipelineEventsInput"></a>

```typescript
public readonly pipelineEventsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `pushEventsBranchFilterInput`<sup>Optional</sup> <a name="pushEventsBranchFilterInput" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.pushEventsBranchFilterInput"></a>

```typescript
public readonly pushEventsBranchFilterInput: string;
```

- *Type:* string

---

##### `pushEventsInput`<sup>Optional</sup> <a name="pushEventsInput" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.pushEventsInput"></a>

```typescript
public readonly pushEventsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `releasesEventsInput`<sup>Optional</sup> <a name="releasesEventsInput" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.releasesEventsInput"></a>

```typescript
public readonly releasesEventsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `subgroupEventsInput`<sup>Optional</sup> <a name="subgroupEventsInput" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.subgroupEventsInput"></a>

```typescript
public readonly subgroupEventsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tagPushEventsInput`<sup>Optional</sup> <a name="tagPushEventsInput" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.tagPushEventsInput"></a>

```typescript
public readonly tagPushEventsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tokenInput`<sup>Optional</sup> <a name="tokenInput" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.tokenInput"></a>

```typescript
public readonly tokenInput: string;
```

- *Type:* string

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.urlInput"></a>

```typescript
public readonly urlInput: string;
```

- *Type:* string

---

##### `wikiPageEventsInput`<sup>Optional</sup> <a name="wikiPageEventsInput" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.wikiPageEventsInput"></a>

```typescript
public readonly wikiPageEventsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `confidentialIssuesEvents`<sup>Required</sup> <a name="confidentialIssuesEvents" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.confidentialIssuesEvents"></a>

```typescript
public readonly confidentialIssuesEvents: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `confidentialNoteEvents`<sup>Required</sup> <a name="confidentialNoteEvents" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.confidentialNoteEvents"></a>

```typescript
public readonly confidentialNoteEvents: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `deploymentEvents`<sup>Required</sup> <a name="deploymentEvents" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.deploymentEvents"></a>

```typescript
public readonly deploymentEvents: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableSslVerification`<sup>Required</sup> <a name="enableSslVerification" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.enableSslVerification"></a>

```typescript
public readonly enableSslVerification: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.group"></a>

```typescript
public readonly group: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `issuesEvents`<sup>Required</sup> <a name="issuesEvents" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.issuesEvents"></a>

```typescript
public readonly issuesEvents: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `jobEvents`<sup>Required</sup> <a name="jobEvents" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.jobEvents"></a>

```typescript
public readonly jobEvents: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `mergeRequestsEvents`<sup>Required</sup> <a name="mergeRequestsEvents" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.mergeRequestsEvents"></a>

```typescript
public readonly mergeRequestsEvents: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `noteEvents`<sup>Required</sup> <a name="noteEvents" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.noteEvents"></a>

```typescript
public readonly noteEvents: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `pipelineEvents`<sup>Required</sup> <a name="pipelineEvents" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.pipelineEvents"></a>

```typescript
public readonly pipelineEvents: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `pushEvents`<sup>Required</sup> <a name="pushEvents" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.pushEvents"></a>

```typescript
public readonly pushEvents: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `pushEventsBranchFilter`<sup>Required</sup> <a name="pushEventsBranchFilter" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.pushEventsBranchFilter"></a>

```typescript
public readonly pushEventsBranchFilter: string;
```

- *Type:* string

---

##### `releasesEvents`<sup>Required</sup> <a name="releasesEvents" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.releasesEvents"></a>

```typescript
public readonly releasesEvents: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `subgroupEvents`<sup>Required</sup> <a name="subgroupEvents" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.subgroupEvents"></a>

```typescript
public readonly subgroupEvents: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tagPushEvents`<sup>Required</sup> <a name="tagPushEvents" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.tagPushEvents"></a>

```typescript
public readonly tagPushEvents: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.token"></a>

```typescript
public readonly token: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `wikiPageEvents`<sup>Required</sup> <a name="wikiPageEvents" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.wikiPageEvents"></a>

```typescript
public readonly wikiPageEvents: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GroupHookConfig <a name="GroupHookConfig" id="@cdktf/provider-gitlab.groupHook.GroupHookConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.groupHook.GroupHookConfig.Initializer"></a>

```typescript
import { groupHook } from '@cdktf/provider-gitlab'

const groupHookConfig: groupHook.GroupHookConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.group">group</a></code> | <code>string</code> | The ID or full path of the group. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.url">url</a></code> | <code>string</code> | The url of the hook to invoke. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.confidentialIssuesEvents">confidentialIssuesEvents</a></code> | <code>boolean \| cdktf.IResolvable</code> | Invoke the hook for confidential issues events. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.confidentialNoteEvents">confidentialNoteEvents</a></code> | <code>boolean \| cdktf.IResolvable</code> | Invoke the hook for confidential notes events. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.deploymentEvents">deploymentEvents</a></code> | <code>boolean \| cdktf.IResolvable</code> | Invoke the hook for deployment events. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.enableSslVerification">enableSslVerification</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable ssl verification when invoking the hook. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.6.0/docs/resources/group_hook#id GroupHook#id}. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.issuesEvents">issuesEvents</a></code> | <code>boolean \| cdktf.IResolvable</code> | Invoke the hook for issues events. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.jobEvents">jobEvents</a></code> | <code>boolean \| cdktf.IResolvable</code> | Invoke the hook for job events. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.mergeRequestsEvents">mergeRequestsEvents</a></code> | <code>boolean \| cdktf.IResolvable</code> | Invoke the hook for merge requests. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.noteEvents">noteEvents</a></code> | <code>boolean \| cdktf.IResolvable</code> | Invoke the hook for notes events. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.pipelineEvents">pipelineEvents</a></code> | <code>boolean \| cdktf.IResolvable</code> | Invoke the hook for pipeline events. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.pushEvents">pushEvents</a></code> | <code>boolean \| cdktf.IResolvable</code> | Invoke the hook for push events. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.pushEventsBranchFilter">pushEventsBranchFilter</a></code> | <code>string</code> | Invoke the hook for push events on matching branches only. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.releasesEvents">releasesEvents</a></code> | <code>boolean \| cdktf.IResolvable</code> | Invoke the hook for releases events. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.subgroupEvents">subgroupEvents</a></code> | <code>boolean \| cdktf.IResolvable</code> | Invoke the hook for subgroup events. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.tagPushEvents">tagPushEvents</a></code> | <code>boolean \| cdktf.IResolvable</code> | Invoke the hook for tag push events. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.token">token</a></code> | <code>string</code> | A token to present when invoking the hook. The token is not available for imported resources. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.wikiPageEvents">wikiPageEvents</a></code> | <code>boolean \| cdktf.IResolvable</code> | Invoke the hook for wiki page events. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.group"></a>

```typescript
public readonly group: string;
```

- *Type:* string

The ID or full path of the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.6.0/docs/resources/group_hook#group GroupHook#group}

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

The url of the hook to invoke.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.6.0/docs/resources/group_hook#url GroupHook#url}

---

##### `confidentialIssuesEvents`<sup>Optional</sup> <a name="confidentialIssuesEvents" id="@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.confidentialIssuesEvents"></a>

```typescript
public readonly confidentialIssuesEvents: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Invoke the hook for confidential issues events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.6.0/docs/resources/group_hook#confidential_issues_events GroupHook#confidential_issues_events}

---

##### `confidentialNoteEvents`<sup>Optional</sup> <a name="confidentialNoteEvents" id="@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.confidentialNoteEvents"></a>

```typescript
public readonly confidentialNoteEvents: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Invoke the hook for confidential notes events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.6.0/docs/resources/group_hook#confidential_note_events GroupHook#confidential_note_events}

---

##### `deploymentEvents`<sup>Optional</sup> <a name="deploymentEvents" id="@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.deploymentEvents"></a>

```typescript
public readonly deploymentEvents: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Invoke the hook for deployment events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.6.0/docs/resources/group_hook#deployment_events GroupHook#deployment_events}

---

##### `enableSslVerification`<sup>Optional</sup> <a name="enableSslVerification" id="@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.enableSslVerification"></a>

```typescript
public readonly enableSslVerification: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable ssl verification when invoking the hook.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.6.0/docs/resources/group_hook#enable_ssl_verification GroupHook#enable_ssl_verification}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.6.0/docs/resources/group_hook#id GroupHook#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `issuesEvents`<sup>Optional</sup> <a name="issuesEvents" id="@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.issuesEvents"></a>

```typescript
public readonly issuesEvents: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Invoke the hook for issues events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.6.0/docs/resources/group_hook#issues_events GroupHook#issues_events}

---

##### `jobEvents`<sup>Optional</sup> <a name="jobEvents" id="@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.jobEvents"></a>

```typescript
public readonly jobEvents: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Invoke the hook for job events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.6.0/docs/resources/group_hook#job_events GroupHook#job_events}

---

##### `mergeRequestsEvents`<sup>Optional</sup> <a name="mergeRequestsEvents" id="@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.mergeRequestsEvents"></a>

```typescript
public readonly mergeRequestsEvents: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Invoke the hook for merge requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.6.0/docs/resources/group_hook#merge_requests_events GroupHook#merge_requests_events}

---

##### `noteEvents`<sup>Optional</sup> <a name="noteEvents" id="@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.noteEvents"></a>

```typescript
public readonly noteEvents: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Invoke the hook for notes events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.6.0/docs/resources/group_hook#note_events GroupHook#note_events}

---

##### `pipelineEvents`<sup>Optional</sup> <a name="pipelineEvents" id="@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.pipelineEvents"></a>

```typescript
public readonly pipelineEvents: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Invoke the hook for pipeline events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.6.0/docs/resources/group_hook#pipeline_events GroupHook#pipeline_events}

---

##### `pushEvents`<sup>Optional</sup> <a name="pushEvents" id="@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.pushEvents"></a>

```typescript
public readonly pushEvents: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Invoke the hook for push events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.6.0/docs/resources/group_hook#push_events GroupHook#push_events}

---

##### `pushEventsBranchFilter`<sup>Optional</sup> <a name="pushEventsBranchFilter" id="@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.pushEventsBranchFilter"></a>

```typescript
public readonly pushEventsBranchFilter: string;
```

- *Type:* string

Invoke the hook for push events on matching branches only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.6.0/docs/resources/group_hook#push_events_branch_filter GroupHook#push_events_branch_filter}

---

##### `releasesEvents`<sup>Optional</sup> <a name="releasesEvents" id="@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.releasesEvents"></a>

```typescript
public readonly releasesEvents: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Invoke the hook for releases events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.6.0/docs/resources/group_hook#releases_events GroupHook#releases_events}

---

##### `subgroupEvents`<sup>Optional</sup> <a name="subgroupEvents" id="@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.subgroupEvents"></a>

```typescript
public readonly subgroupEvents: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Invoke the hook for subgroup events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.6.0/docs/resources/group_hook#subgroup_events GroupHook#subgroup_events}

---

##### `tagPushEvents`<sup>Optional</sup> <a name="tagPushEvents" id="@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.tagPushEvents"></a>

```typescript
public readonly tagPushEvents: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Invoke the hook for tag push events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.6.0/docs/resources/group_hook#tag_push_events GroupHook#tag_push_events}

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.token"></a>

```typescript
public readonly token: string;
```

- *Type:* string

A token to present when invoking the hook. The token is not available for imported resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.6.0/docs/resources/group_hook#token GroupHook#token}

---

##### `wikiPageEvents`<sup>Optional</sup> <a name="wikiPageEvents" id="@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.wikiPageEvents"></a>

```typescript
public readonly wikiPageEvents: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Invoke the hook for wiki page events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.6.0/docs/resources/group_hook#wiki_page_events GroupHook#wiki_page_events}

---



