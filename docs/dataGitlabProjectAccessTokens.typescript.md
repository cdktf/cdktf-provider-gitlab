# `dataGitlabProjectAccessTokens` Submodule <a name="`dataGitlabProjectAccessTokens` Submodule" id="@cdktf/provider-gitlab.dataGitlabProjectAccessTokens"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGitlabProjectAccessTokens <a name="DataGitlabProjectAccessTokens" id="@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokens"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/data-sources/project_access_tokens gitlab_project_access_tokens}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokens.Initializer"></a>

```typescript
import { dataGitlabProjectAccessTokens } from '@cdktf/provider-gitlab'

new dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokens(scope: Construct, id: string, config: DataGitlabProjectAccessTokensConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokens.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokens.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokens.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokensConfig">DataGitlabProjectAccessTokensConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokens.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokens.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokens.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokensConfig">DataGitlabProjectAccessTokensConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokens.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokens.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokens.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokens.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokens.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokens.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokens.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokens.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokens.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokens.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokens.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokens.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokens.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokens.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokens.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokens.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokens.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokens.resetState">resetState</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokens.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokens.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokens.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokens.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokens.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokens.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokens.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokens.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokens.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokens.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokens.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokens.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokens.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokens.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokens.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokens.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokens.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokens.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokens.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokens.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokens.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokens.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokens.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokens.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokens.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokens.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokens.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokens.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokens.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokens.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetState` <a name="resetState" id="@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokens.resetState"></a>

```typescript
public resetState(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokens.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokens.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokens.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokens.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataGitlabProjectAccessTokens resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokens.isConstruct"></a>

```typescript
import { dataGitlabProjectAccessTokens } from '@cdktf/provider-gitlab'

dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokens.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokens.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokens.isTerraformElement"></a>

```typescript
import { dataGitlabProjectAccessTokens } from '@cdktf/provider-gitlab'

dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokens.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokens.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokens.isTerraformDataSource"></a>

```typescript
import { dataGitlabProjectAccessTokens } from '@cdktf/provider-gitlab'

dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokens.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokens.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokens.generateConfigForImport"></a>

```typescript
import { dataGitlabProjectAccessTokens } from '@cdktf/provider-gitlab'

dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokens.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataGitlabProjectAccessTokens resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokens.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokens.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGitlabProjectAccessTokens to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokens.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGitlabProjectAccessTokens that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/data-sources/project_access_tokens#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokens.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGitlabProjectAccessTokens to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokens.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokens.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokens.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokens.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokens.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokens.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokens.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokens.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokens.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokens.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokens.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokens.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokens.property.accessTokens">accessTokens</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokensAccessTokensList">DataGitlabProjectAccessTokensAccessTokensList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokens.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokens.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokens.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokens.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokens.property.state">state</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokens.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokens.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokens.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokens.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokens.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokens.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokens.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokens.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokens.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokens.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokens.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokens.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `accessTokens`<sup>Required</sup> <a name="accessTokens" id="@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokens.property.accessTokens"></a>

```typescript
public readonly accessTokens: DataGitlabProjectAccessTokensAccessTokensList;
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokensAccessTokensList">DataGitlabProjectAccessTokensAccessTokensList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokens.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokens.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokens.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokens.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokens.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokens.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokens.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGitlabProjectAccessTokensAccessTokens <a name="DataGitlabProjectAccessTokensAccessTokens" id="@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokensAccessTokens"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokensAccessTokens.Initializer"></a>

```typescript
import { dataGitlabProjectAccessTokens } from '@cdktf/provider-gitlab'

const dataGitlabProjectAccessTokensAccessTokens: dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokensAccessTokens = { ... }
```


### DataGitlabProjectAccessTokensConfig <a name="DataGitlabProjectAccessTokensConfig" id="@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokensConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokensConfig.Initializer"></a>

```typescript
import { dataGitlabProjectAccessTokens } from '@cdktf/provider-gitlab'

const dataGitlabProjectAccessTokensConfig: dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokensConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokensConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokensConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokensConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokensConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokensConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokensConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokensConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokensConfig.property.project">project</a></code> | <code>string</code> | The name or id of the project. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokensConfig.property.state">state</a></code> | <code>string</code> | List all project access token that match the specified state. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokensConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokensConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokensConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokensConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokensConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokensConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokensConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokensConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

The name or id of the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/data-sources/project_access_tokens#project DataGitlabProjectAccessTokens#project}

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokensConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

List all project access token that match the specified state.

Valid values are `active`, `inactive`. Returns all project access token if not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/data-sources/project_access_tokens#state DataGitlabProjectAccessTokens#state}

---

## Classes <a name="Classes" id="Classes"></a>

### DataGitlabProjectAccessTokensAccessTokensList <a name="DataGitlabProjectAccessTokensAccessTokensList" id="@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokensAccessTokensList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokensAccessTokensList.Initializer"></a>

```typescript
import { dataGitlabProjectAccessTokens } from '@cdktf/provider-gitlab'

new dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokensAccessTokensList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokensAccessTokensList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokensAccessTokensList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokensAccessTokensList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokensAccessTokensList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokensAccessTokensList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokensAccessTokensList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokensAccessTokensList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokensAccessTokensList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokensAccessTokensList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokensAccessTokensList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokensAccessTokensList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokensAccessTokensList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokensAccessTokensList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokensAccessTokensList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokensAccessTokensList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokensAccessTokensList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokensAccessTokensList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokensAccessTokensList.get"></a>

```typescript
public get(index: number): DataGitlabProjectAccessTokensAccessTokensOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokensAccessTokensList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokensAccessTokensList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokensAccessTokensList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokensAccessTokensList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokensAccessTokensList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGitlabProjectAccessTokensAccessTokensOutputReference <a name="DataGitlabProjectAccessTokensAccessTokensOutputReference" id="@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokensAccessTokensOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokensAccessTokensOutputReference.Initializer"></a>

```typescript
import { dataGitlabProjectAccessTokens } from '@cdktf/provider-gitlab'

new dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokensAccessTokensOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokensAccessTokensOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokensAccessTokensOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokensAccessTokensOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokensAccessTokensOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokensAccessTokensOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokensAccessTokensOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokensAccessTokensOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokensAccessTokensOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokensAccessTokensOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokensAccessTokensOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokensAccessTokensOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokensAccessTokensOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokensAccessTokensOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokensAccessTokensOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokensAccessTokensOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokensAccessTokensOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokensAccessTokensOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokensAccessTokensOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokensAccessTokensOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokensAccessTokensOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokensAccessTokensOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokensAccessTokensOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokensAccessTokensOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokensAccessTokensOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokensAccessTokensOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokensAccessTokensOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokensAccessTokensOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokensAccessTokensOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokensAccessTokensOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokensAccessTokensOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokensAccessTokensOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokensAccessTokensOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokensAccessTokensOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokensAccessTokensOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokensAccessTokensOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokensAccessTokensOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokensAccessTokensOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokensAccessTokensOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokensAccessTokensOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokensAccessTokensOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokensAccessTokensOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokensAccessTokensOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokensAccessTokensOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokensAccessTokensOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokensAccessTokensOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokensAccessTokensOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokensAccessTokensOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokensAccessTokensOutputReference.property.accessLevel">accessLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokensAccessTokensOutputReference.property.active">active</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokensAccessTokensOutputReference.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokensAccessTokensOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokensAccessTokensOutputReference.property.expiresAt">expiresAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokensAccessTokensOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokensAccessTokensOutputReference.property.lastUsedAt">lastUsedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokensAccessTokensOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokensAccessTokensOutputReference.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokensAccessTokensOutputReference.property.revoked">revoked</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokensAccessTokensOutputReference.property.scopes">scopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokensAccessTokensOutputReference.property.userId">userId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokensAccessTokensOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokensAccessTokens">DataGitlabProjectAccessTokensAccessTokens</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokensAccessTokensOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokensAccessTokensOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accessLevel`<sup>Required</sup> <a name="accessLevel" id="@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokensAccessTokensOutputReference.property.accessLevel"></a>

```typescript
public readonly accessLevel: string;
```

- *Type:* string

---

##### `active`<sup>Required</sup> <a name="active" id="@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokensAccessTokensOutputReference.property.active"></a>

```typescript
public readonly active: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokensAccessTokensOutputReference.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokensAccessTokensOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `expiresAt`<sup>Required</sup> <a name="expiresAt" id="@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokensAccessTokensOutputReference.property.expiresAt"></a>

```typescript
public readonly expiresAt: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokensAccessTokensOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lastUsedAt`<sup>Required</sup> <a name="lastUsedAt" id="@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokensAccessTokensOutputReference.property.lastUsedAt"></a>

```typescript
public readonly lastUsedAt: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokensAccessTokensOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokensAccessTokensOutputReference.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `revoked`<sup>Required</sup> <a name="revoked" id="@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokensAccessTokensOutputReference.property.revoked"></a>

```typescript
public readonly revoked: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokensAccessTokensOutputReference.property.scopes"></a>

```typescript
public readonly scopes: string[];
```

- *Type:* string[]

---

##### `userId`<sup>Required</sup> <a name="userId" id="@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokensAccessTokensOutputReference.property.userId"></a>

```typescript
public readonly userId: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokensAccessTokensOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGitlabProjectAccessTokensAccessTokens;
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProjectAccessTokens.DataGitlabProjectAccessTokensAccessTokens">DataGitlabProjectAccessTokensAccessTokens</a>

---



